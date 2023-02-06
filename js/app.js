const slides = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
    ]

const inputContainer = document.getElementById('container')
document.getElementById("container").style.position = "relative";
document.getElementById("container").style.width = "fit-content";

for (let i=0; i<5; i++) {
    inputContainer.innerHTML += '<img src="' + slides [i] + '" alt="img" id="img' + i + '">'
    document.getElementById("img" + i).style.display = "none";
}

let active = 0
console.log (active)

document.getElementById("img" + active).style.display = "block";

inputContainer.innerHTML += '<i id=indietro class="fa-solid fa-chevron-left"></i>'
inputContainer.innerHTML += '<i id=avanti class="fa-solid fa-chevron-right"></i>'

document.getElementById("avanti").style.position = "absolute";
document.getElementById("avanti").style.color = "white";
document.getElementById("avanti").style.top = "50%";
document.getElementById("avanti").style.right = "20px";
document.getElementById("avanti").style.transform = "translateY(-50%)";

document.getElementById("indietro").style.position = "absolute";
document.getElementById("indietro").style.color = "white";
document.getElementById("indietro").style.top = "50%";
document.getElementById("indietro").style.left = "20px";
document.getElementById("indietro").style.transform = "translateY(-50%)";

const indietro = document.getElementById('indietro')
const avanti = document.getElementById('avanti')

avanti.addEventListener('click', function () {
    document.getElementById("img" + active).style.display = "none"
    if (active == 4) { active = 3 }
    document.getElementById("img" + ++active).style.display = "block"

    console.log (active)
});

indietro.addEventListener('click', function () {
    document.getElementById("img" + active).style.display = "none"
    if (active == 0) { active = 1 }
    document.getElementById("img" + --active).style.display = "block"

    console.log (active)
});
