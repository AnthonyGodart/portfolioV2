// Building functions
let currentLanguage;

const checkStoredLanguage = function() {
    if(!sessionStorage.getItem('currentLanguage')){
        sessionStorage.setItem('currentLanguage', 'fr');
        currentLanguage = sessionStorage.getItem('currentLanguage');
        updateTranslation();
    } else {
        currentLanguage = sessionStorage.getItem('currentLanguage');
        updateTranslation();
    };
}

const getTranslation = function (translationKey) {
    return currentLanguage === 'fr' ? frenchTranslations[translationKey] : englishTranslations[translationKey];
}

const updateTranslation = function() {
    let elements = document.querySelectorAll('[data-translate-key]');
    elements.forEach(element => {
        const translationKey = element.dataset.translateKey;
        element.innerText = getTranslation(translationKey);
    });
}

const switchLanguage = function() {
    currentLanguage = sessionStorage.getItem('currentLanguage');
    this.innerHTML = showLanguageIcon(currentLanguage);
    currentLanguage = (currentLanguage === "fr" ?  "en" : "fr");
    updateTranslation();
    sessionStorage.setItem("currentLanguage", currentLanguage);
}

const englishFlag = '<img src="./img/englishflag.ico" alt="English Flag">';
const frenchFlag = '<img src="./img/frenchflag.ico" alt="French Flag">';
const showLanguageIcon = function(language) {
    return language === "fr" ? frenchFlag : englishFlag;
}

document.addEventListener('DOMContentLoaded', () => {

    checkStoredLanguage();

    const switcher = document.getElementById('language-switch');
    switcher.innerHTML = currentLanguage === "fr" ? englishFlag : frenchFlag;
    switcher.addEventListener('click', switchLanguage);

    const openers = [...document.getElementsByClassName('opener')];
    openers.forEach(opener => {
        const container = opener.parentElement;

        const paragraphs = container.querySelectorAll('p[data-translate-key]');
        paragraphs.forEach(paragraph => {
            paragraph.innerText = getTranslation(paragraph.dataset.translateKey);
        });
    });
});
