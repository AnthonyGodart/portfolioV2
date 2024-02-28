document.addEventListener('DOMContentLoaded', () => {
    const frenchTranslations = {
        "main-title": "Développeur backend JS/PHP",
        "linkedin-link": "Vers mon profil LinkedIn...",
        "github-link": "Vers mon compte GitHub...",
        "warning-title": "Avertissement...",
        "warning-content": "Ce portfolio est en cours de réalisation...",
        "presentation-title": "Qui je suis...",
        "presentation-content": "Passionné par la technique et la technologie, j'ai toujours été curieux de comprendre " +
                                "comment fonctionnent les systèmes qui m'entourent." +
                                "\n\nAprès 15ans passés dans la maintenance automobile, j'ai fait le pari audacieux " +
                                "de me reconvertir dans le développement. Ce secteur en perpétuelle évolution " +
                                "représente à mes yeux la possibilité de maintenir en éveil constant mon esprit de curiosité.",
        "experience-title": "Mon expérience professionnelle...",
        "experience-content": "Côté expérience professionnelle, j’ai réalisé ma formation dans l’automobile en alternance. " +
                            "J’ai obtenu mon CAP en 1an au Centre Auto Leclerc de Bourg-lès-Valence, et j’ai poursuivi " +
                            "en BEP puis BAC Pro à la concession Peugeot SOVACA de Valence pendant 2ans." +
                            "\n\nDébut 2011, j’ai été reçu pour intégrer l’école de Gendarmerie de Montluçon et ma "+
                            "formation militaire m’a permis de devenir Gendarme Adjoint Volontaire, dans un premier temps " +
                            "au PSIG de Valence, puis à la brigade de Livron-sur-Drôme. Si l’aspect intervention au sein " +
                            "du PSIG correspondait particulièrement avec mes attentes, ma mutation en brigade m’a confronté " +
                            "à des situations moralement difficiles et j’ai finalement choisi de mettre fin à cette aventure." +
                            "\n\nJe suis donc revenu à mes bases en tant que mécanicien automobile chez Norauto à Valence. " +
                            "De 2012 à 2017, j'ai acquis une expérience approfondie dans l'entretien et le diagnostic des véhicules." +
                            "\n\nJ’ai ensuite occupé le poste de leader d'atelier au Feu Vert Service de Bourg-lès-Valence de " +
                            "2017 à 2019, où j'ai performé dans l'entretien et le diagnostic de véhicules automobiles " +
                            "toutes marques, tout en manageant une équipe de 2 à 3 techniciens." +
                            "\n\nPar la suite, j’ai été approché par Labrosse Equipement, et j’ai saisi l’opportunité " +
                            "qui m’était tendue afin de pouvoir diversifier mes compétences techniques. L’aventure " +
                            "a toutefois été de courte durée suite à un désaccord sur les conditions inscrites " +
                            "au contrat de travail." + 
                            "\n\nJ’ai rapidement rebondi, et j’ai rejoint l’équipe atelier de Tranchard SARL en tant " +
                            "que technicien SAV, de 2019 à 2021, où j'ai effectué des interventions à la fois en " +
                            "atelier et en déplacement chez les clients, et préparé du matériel agricole." +
                            "\n\nJ'ai enfin été consultant technique indépendant chez Consult'Auto de 2021 à 2023, " +
                            "fournissant des services de conseil auprès des clients, notamment ceux d’une start-up " +
                            "dans l’assurance automobile." +
                            "\n\nCes différentes expériences m'ont doté d'une compréhension approfondie des systèmes " +
                            "automobiles, plus largement dans les domaines techniques, et ont finalement ouvert la " +
                            "voie à ma reconversion dans le développement, guidée par ma passion constante pour la " +
                            "technologie et l'apprentissage continu.",
        "education-title": "Ma formation...",
        "education-content": "2023 - Diplômé en tant que développeur intégrateur web (RNCP Bac +2)" +
                                "\n(À distance : OpenClassrooms)" +
                                "\n\n" +
                                "2010 - Certificats de maintenance automobile (CAP - BEP - Bac Pro)" +
                                "\n(En alternance : CFA Lucien Ravit / Leclerc Auto, Peugeot SOVACA)" +
                                "\n\n" +
                                "2006 - Baccalauréat Scientifique, option Sciences de l'Ingénieur",
        "education-projects-title": "Les projets réalisés lors de ma formation avec Openclassrooms...",
        "education-projects-content": "En cours de rédaction...",
        "personal-projects-title": "Mes projets personnels...",
        "personal-projects-content": "En cours de rédaction...",
    };

    const englishTranslations = {
        "main-title": "Backend developer JS/PHP",
        "linkedin-link": "To my LinkedIn profile...",
        "github-link": "To my GitHub account...",
        "warning-title": "Warning...",
        "warning-content": "This portfolio is under constuction...",
        "presentation-title": "Who I am...",
        "presentation-content": "Passionate about technique and technology, I have always been curious to understand " +
                                "how the systems around me work." +
                                "\n\nAfter 15 years spent in automotive maintenance, I made the bold gamble to " +
                                "reconvert myself into development. This constantly evolving sector represents, " +
                                "to me, the opportunity to keep my spirit of curiosity constantly awake.",
        "experience-title": "My experience...",
        "experience-content": "Regarding professional experience, I pursued my training in the automotive industry through an apprenticeship. " +
                                "I obtained my CAP (Certificate of Professional Aptitude) in 1 year at the Auto Center Leclerc in Bourg-lès-Valence, and continued " +
                                "with a BEP (Vocational Studies Certificate) followed by a Baccalauréat Professionnel at the Peugeot SOVACA dealership in Valence for 2 years." +
                                "\n\nIn early 2011, I was accepted to join the Gendarmerie school in Montluçon. " +
                                "My military training enabled me to become a Voluntary Assistant Gendarme, initially at the PSIG (Intervention and Surveillance Platoon) in Valence, " +
                                "and later at the Livron-sur-Drôme brigade. While the intervention aspect within the PSIG aligned well with my expectations, " +
                                "my transfer to the brigade exposed me to morally challenging situations, leading me to ultimately end that chapter." +
                                "\n\nI then returned to my roots as an automotive mechanic at Norauto in Valence. From 2012 to 2017, " +
                                "I gained extensive experience in vehicle maintenance and diagnostics." +
                                "\n\nSubsequently, I held the position of workshop leader at Feu Vert Service in Bourg-lès-Valence from " +
                                "2017 to 2019, where I excelled in vehicle maintenance and diagnostics for all brands, while managing a team of 2 to 3 technicians." +
                                "\n\nI was later approached by Labrosse Equipement, and I seized the opportunity to diversify my technical skills. " +
                                "However, the adventure was short-lived due to a disagreement over the conditions outlined in the employment contract." +
                                "\n\nI quickly bounced back and joined the workshop team at Tranchard SARL as an after-sales service technician from " +
                                "2019 to 2021, where I performed interventions both in the workshop and on-site with clients, and prepared agricultural equipment." +
                                "\n\nFinally, I worked as an independent technical consultant at Consult'Auto from 2021 to 2023, " +
                                "providing consulting services to clients, including those of a startup in the automotive insurance sector." +
                                "\n\nThese diverse experiences have provided me with a deep understanding of automotive systems, " +
                                "as well as broader technical domains, ultimately paving the way for my transition into development, " +
                                "driven by my constant passion for technology and continuous learning.",
        "education-title": "My education...",
        "education-content": "2023 - Graduated as web developer ( RNCP Bac +2 )" +
                              "\n( Full Remote : Open Classrooms )" +
                              "\n\n" +
                              "2010 - Automotive maintenance certificates ( CAP - BEP - Bac Pro )" +
                              "\n( Internship : CFA Lucien Ravit / Leclerc Auto, Peugeot SOVACA )" +
                              "\n\n" +
                              "2006 - Baccalauréat in Sciences with Engineering Sciences option",
        "education-projects-title": "Projects completed during my training with OpenClassrooms...",
        "education-projects-content": "In progress...",
        "personal-projects-title": "Personal projects",
        "personal-projects-content": "In progress...",
    };

    const openers = [...document.getElementsByClassName('opener')];
    const englishFlag = '<img src="./img/englishflag.ico" alt="English Flag">';
    const frenchFlag = '<img src="./img/frenchflag.ico" alt="French Flag">';
    let currentLanguage;

    const getTranslation = function (translationKey) {
        return currentLanguage === 'fr' ? frenchTranslations[translationKey] : englishTranslations[translationKey];
    }

    const updateTranslation = function(elements) {
        elements.forEach(element => {
            const translationKey = element.dataset.translateKey;
            if(!element.dataset.status){
                element.innerText = getTranslation(translationKey);
            }          
        });
    }

    const switchLanguage = function() {
        currentLanguage = sessionStorage.getItem('currentLanguage');
        document.getElementById('language-switch').innerHTML = showLanguageIcon(currentLanguage);
        currentLanguage = (currentLanguage === "fr" ?  "en" : "fr");
        sessionStorage.setItem("currentLanguage", currentLanguage);
        updateTranslation(elements);
    }

    const showLanguageIcon = function(language) {
        return language === "fr" ? frenchFlag : englishFlag;
    }

    if(!sessionStorage.getItem('currentLanguage')){
        sessionStorage.setItem('currentLanguage', 'fr');
        currentLanguage = sessionStorage.getItem('currentLanguage');
    } else {
        currentLanguage = sessionStorage.getItem('currentLanguage');
    };

    let elements = document.querySelectorAll('[data-translate-key]');

    updateTranslation(elements);

    const switcher = document.getElementById('language-switch');
    switcher.innerHTML = currentLanguage === "fr" ? englishFlag : frenchFlag;

    switcher.addEventListener('click', switchLanguage);

    openers.forEach(opener => {
        const container = opener.parentElement;
        const paragraphs = container.querySelectorAll('p[data-translate-key]');
        
        opener.addEventListener('mouseenter', function() {
            paragraphs.forEach(paragraph => {
                paragraph.dataset.status = 'visible';
                paragraph.innerText = getTranslation(paragraph.dataset.translateKey);
            });
        });
    
        container.addEventListener('mouseleave', function() {
            paragraphs.forEach(paragraph => {
                paragraph.dataset.status = 'hidden';
                paragraph.innerText = "";
            });
        });
    });
    

});
