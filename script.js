
let cartas = 0;
const gifs = ['revertitparrot', 'unicornparrot', 'explodyparrot', 'fiestaparrot', 'bobrossparrot', 'metalparrot', 'tripletsparrot'];
while (cartas < 4 || cartas > 14 || cartas % 2 === 1) {
    cartas = prompt("Com quantas cartas você quer jogar?\nEscolha um número par entre 4 e 14")
}
const pares = cartas / 2;
const gifsusados = [];
for (let i = 0; i < pares; i++) {
    gifsusados.push(gifs[i], gifs[i])
}
gifsusados.sort(comparador);
const espaco_cartas = document.querySelector(".espaco-cartas")

for (let i = 0; i < gifsusados.length; i++) {
    espaco_cartas.innerHTML += `<li class="carta" onclick="virar(this)">
    <div class="frente face">
        <img src="./arquivosUteis/back.png">
    </div>
    <div class="verso face">
        <img src="./arquivosUteis/${gifsusados[i]}.gif">
    </div>
    </li>`
}


function comparador() {
    return Math.random() - 0.5;
}

function virar(carta) {
    carta.classList.toggle("virar")
}