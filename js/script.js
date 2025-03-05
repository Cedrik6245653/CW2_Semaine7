const boutonsModale = document.querySelectorAll('.bouton');
const modale = document.querySelector('.modale');

for (let i = 0; i < boutonsModale.length; i++) {
    boutonsModale[i].addEventListener('click', openModale);
}

function openModale(event) {
    const chemin = event.currentTarget.previousElementSibling.getAttribute("src");
    
    const image = document.createElement('img');
    image.setAttribute('src', chemin);
    image.classList.add('zoom');

    modale.appendChild(image);
    modale.classList.add('visible');

    image.addEventListener("click", closeModale);
}

function closeModale(event) {
    modale.removeChild(event.currentTarget);
    modale.classList.remove('visible');
}