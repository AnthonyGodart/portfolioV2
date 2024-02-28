const coordinates = {
    "phone-number": "06 73 11 44 00",
    "e-mail": "ag.anthony.godart@proton.me",
    "linkedin": "https://www.linkedin.com/in/godart-anthony",
    "github": "https://www.github.com/AnthonyGodart"
}

const fillCoordinates = function() {
    const phoneNumber = document.getElementById('phone-number');
    const email = document.getElementById('email');
    const linkedin = document.getElementById('linkedin');
    const github = document.getElementById('github');

    phoneNumber.textContent =  `📞 ${coordinates["phone-number"]}`;
    phoneNumber.href = `tel:${coordinates["phone-number"]}`;

    email.textContent = `📥 ${coordinates["e-mail"]}`;
    email.href = `mailto:${coordinates["email"]}`;

    linkedin.textContent = "Vers mon LinkedIn...";
    linkedin.href = coordinates["linkedin"];
    linkedin.target = "_blank";
    linkedin.setAttribute('rel', 'noopener noreferrer');

    github.textContent = "Vers mon GitHub...";
    github.href = coordinates["github"];
    github.target = "_blank";
    github.setAttribute('rel', 'noopener noreferrer');
}

document.addEventListener('DOMContentLoaded', fillCoordinates);