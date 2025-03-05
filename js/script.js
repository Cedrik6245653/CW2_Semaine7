const boutonsModale = document.querySelectorAll('.boutonModale');
const modale = document.querySelector('.modale');

modale.addEventListener("click", closeModale);

for (let i = 0; i < boutonsModale.length; i++) {
    boutonsModale[i].addEventListener('click', openModale);
}

function openModale(event) {
    modale.classList.add('visible');    
}

function closeModale(event) {
    modale.classList.remove('visible');
}