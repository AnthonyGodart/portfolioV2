const lightBanner = "/img/banner-light.webp";
const darkBanner = "/img/banner-dark.webp";
const moonIcon = '<img src="./img/moon.ico" alt="Moon icon">';
const sunIcon = '<img src="./img/sun.ico" alt="Sun icon">';


let currentTheme;

if(!sessionStorage.getItem('currentTheme')){
    sessionStorage.setItem('currentTheme', 'light');
    currentTheme = sessionStorage.getItem('currentTheme');
} else {
    currentTheme = sessionStorage.getItem('currentTheme');
};

document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('banner');
    const body = document.querySelector('body');
    const switcher = document.getElementById('theme-switch');
    banner.dataset.theme = currentTheme;
    banner.src = currentTheme === "light"? lightBanner : darkBanner;
    body.dataset.theme = currentTheme;
    switcher.dataset.mode = currentTheme === "light" ? "dark" : "light";
    switcher.innerHTML = currentTheme === "light"? moonIcon : sunIcon;

    const switchMode = function() {
        let mode = this.dataset.mode;
        body.dataset.theme = mode;
        let bannerURL = (mode === "light" ? lightBanner : darkBanner);
        banner.dataset.theme = mode;
        banner.src = bannerURL;
        let fillContainer = (mode === "light" ? moonIcon : sunIcon);
        this.dataset.mode = (this.dataset.mode === "light" ?  "dark" : "light");
        this.innerHTML = fillContainer;
        sessionStorage.setItem("currentTheme", mode === "dark" ? "dark" : "light");
    }
    
    switcher.addEventListener('click', switchMode);
});
