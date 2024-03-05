const lightBanner = "./img/banner-light.webp";
const darkBanner = "./img/banner-dark.webp";
const moonIcon = '<img src="./img/moon.ico" alt="Moon icon">';
const sunIcon = '<img src="./img/sun.ico" alt="Sun icon">';

// Initialize site theme
let currentTheme = null;

if(!sessionStorage.getItem('currentTheme')){
    sessionStorage.setItem('currentTheme', 'light');
    currentTheme = sessionStorage.getItem('currentTheme');
} else {
    currentTheme = sessionStorage.getItem('currentTheme');
};

document.addEventListener('DOMContentLoaded', () => {
    // Init HTML elements
    const banner = document.getElementById('banner');
    const body = document.querySelector('body');
    const switcher = document.getElementById('theme-switch');

    // Init mode to body
    body.classList.add(currentTheme);

    // Init mode to banner
    banner.dataset.theme = currentTheme;
    banner.src = currentTheme === "light"? lightBanner : darkBanner;

    // Init mode to switch
    switcher.dataset.mode = currentTheme === "light" ? "dark" : "light";
    switcher.innerHTML = currentTheme === "light"? moonIcon : sunIcon;

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
});
