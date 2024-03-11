const lightBanner = "./img/banner-light.webp";
const darkBanner = "./img/banner-dark.webp";
const moonIcon = '<img src="./img/moon.ico" alt="Moon icon">';
const sunIcon = '<img src="./img/sun.ico" alt="Sun icon">';

// Initialize site theme
const getCurrentTimeAMPM = function() {
    const currentDate = new Date();
    const options = { hour12: true };
    const timeString = currentDate.toLocaleTimeString('en-US', options);
    return timeString;
}

const timeToMilliseconds = function(timeString) {
    const [time, modifier] = timeString.split(' ');
    let [hours, minutes, seconds] = time.split(':');
    hours = parseInt(hours, 10);
    if (hours === 12 && modifier === 'AM') {
        hours = 0;
    }
    if (modifier === 'PM' && hours !== 12) {
        hours += 12;
    }
    return hours * 3600000 + minutes * 60000 + seconds * 1000;
}

const setInitialTheme = async function() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            successCallback,
            errorCallback,
            { enableHighAccuracy: true }
        );

        function errorCallback(error) {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    console.error("L'utilisateur a refusé la demande de géolocalisation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.error("L'information de localisation n'est pas disponible.");
                    break;
                case error.TIMEOUT:
                    console.error("La demande de géolocalisation a expiré.");
                    break;
                case error.UNKNOWN_ERROR:
                    console.error("Une erreur inconnue s'est produite.");
                    break;
            }
            reject(error);
        }

        async function successCallback(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            try {
                const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`, {
                    method: 'GET'
                });
                const data = await response.json();
                console.log(data)
                const { sunrise, sunset } = data.results;
                const sunriseMillis = timeToMilliseconds(sunrise);
                const sunsetMillis = timeToMilliseconds(sunset);
                const currentTimeMillis = timeToMilliseconds(getCurrentTimeAMPM());

                const initialTheme = (currentTimeMillis >= sunriseMillis && currentTimeMillis < sunsetMillis) ? 'light' : 'dark';
                sessionStorage.setItem('currentTheme', initialTheme);
                resolve(initialTheme);
            } catch (e) {
                console.error("Error fetching sunrise-sunset data:", e);
                reject(e);
            }
        }
    });
}

async function initializeTheme() {
    let currentTheme = sessionStorage.getItem('currentTheme');
    if (!currentTheme) {
        currentTheme = await setInitialTheme();
    }
    return currentTheme;
}

document.addEventListener('DOMContentLoaded', async () => {
    let currentTheme = await initializeTheme();

    // Init HTML elements
    const banner = document.getElementById('banner');
    const body = document.querySelector('body');
    const switcher = document.getElementById('theme-switch');

    // Init mode to body
    body.classList.add(currentTheme);

    // Init mode to banner
    banner.dataset.theme = currentTheme;
    banner.src = currentTheme === "light" ? lightBanner : darkBanner;

    // Init mode to switch
    switcher.dataset.mode = currentTheme === "light" ? "dark" : "light";
    switcher.innerHTML = currentTheme === "light" ? moonIcon : sunIcon;

    const switchMode = function() {
        // Get current mode
        let mode = this.dataset.mode;

        // Apply switched mode to body
        body.classList.remove(currentTheme);
        body.classList.add(mode);

        // Apply switched mode to banner
        let bannerPath = (mode === "light" ? lightBanner : darkBanner);
        banner.dataset.theme = mode;
        banner.src = bannerPath;

        // Apply switched mode to icon
        let icon = (mode === "light" ? moonIcon : sunIcon);
        this.dataset.mode = (this.dataset.mode === "light" ?  "dark" : "light");
        this.innerHTML = icon;

        // Set and store switched mode
        sessionStorage.setItem("currentTheme", mode === "dark" ? "dark" : "light");
        currentTheme = mode;
    }
    
    switcher.addEventListener('click', switchMode);

    body.classList.add('loaded');
});
