window.onload = function() {
    const currentYear = new Date().getFullYear();
    const copyrightContainer = document.getElementById('copyright');
    copyrightContainer.innerHTML = `Copyright © Anthony GODART - ${currentYear}`;
};