const slides = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
    ]

const inputContainer = document.getElementById('container')

for (let i=0; i<5; i++) {
    inputContainer.innerHTML += '<img src="' + slides [i] + '" alt="img" id="img' + i + '">'
    document.getElementById("img" + i).style.display = "none";
    document.getElementById("img" + i).style.position = "relative";
}

let current = 0
console.log (current)

document.getElementById("img" + current).style.display = "block";

inputContainer.innerHTML += '<button id=indietro>indietro</button>'
const indietro = document.getElementById('indietro')

inputContainer.innerHTML += '<button id=avanti>avanti</button>'
const avanti = document.getElementById('avanti')

avanti.addEventListener('click', function () {
    document.getElementById("img" + current).style.display = "none"
    if (current == 4) { current = -1 }
    document.getElementById("img" + ++current).style.display = "block"

    console.log (current)
});

indietro.addEventListener('click', function () {
    document.getElementById("img" + current).style.display = "none"
    document.getElementById("img" + --current).style.display = "block"

    console.log (current)
});
