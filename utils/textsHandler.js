// Building functions
let currentLanguage;

const checkStoredLanguage = function() {
    if(!sessionStorage.getItem('currentLanguage')){
        sessionStorage.setItem('currentLanguage', 'fr');
        currentLanguage = sessionStorage.getItem('currentLanguage');
        updateTranslation();
        updateProjectCards();
    } else {
        currentLanguage = sessionStorage.getItem('currentLanguage');
        updateTranslation();
        updateProjectCards();
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

function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('project-card');

    const title = document.createElement('h4');
    title.innerText = project.title[currentLanguage];
    card.appendChild(title);

    const description = document.createElement('p');
    description.innerText = project.description[currentLanguage];
    card.appendChild(description);

    const link = document.createElement('a');
    link.innerText = project.linkText[currentLanguage];
    link.href = project.repoLink;
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noreferrer");
    card.appendChild(link);

    return card;
}

function updateProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        const project = projects[index];
        const title = card.querySelector('h4');
        const description = card.querySelector('p');
        const link = card.querySelector('a');

        title.innerText = project.title[currentLanguage];
        description.innerText = project.description[currentLanguage];
        link.innerText = project.linkText[currentLanguage];
    });
}

const switchLanguage = function() {
    currentLanguage = sessionStorage.getItem('currentLanguage');
    this.innerHTML = showLanguageIcon(currentLanguage);
    currentLanguage = (currentLanguage === "fr" ?  "en" : "fr");
    updateTranslation();
    updateProjectCards();
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

    const personalProjectsContainer = document.getElementById('personal-projects-content');
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        personalProjectsContainer.appendChild(projectCard);
    });

    const openers = [...document.getElementsByClassName('opener')];
    openers.forEach(opener => {
        const container = opener.parentElement;

        const paragraphs = container.querySelectorAll('p[data-translate-key]');
        paragraphs.forEach(paragraph => {
            paragraph.innerText = getTranslation(paragraph.dataset.translateKey);
        });
    });
});
