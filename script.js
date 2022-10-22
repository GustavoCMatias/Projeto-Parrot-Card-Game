let carta_anterior = '';
let pares_encontrados = 0;
let jogadas = 0;

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
    espaco_cartas.innerHTML += `<li class="carta" onclick="virar(this, '${gifsusados[i]}')">
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

function virar(carta, gif) {
    jogadas++;
    carta.classList.add("virar")
    if (carta_anterior == '') {
        carta_anterior = gif;
        carta.classList.add("standby")

    } else {
        if (gif == carta_anterior) {

            pares_encontrados++;
            carta_anterior = '';
            const carta_antiga = document.querySelector('.standby');
            carta_antiga.classList.remove('standby');
            if (pares_encontrados == pares) {
                setTimeout(function () {
                    alert(`Parabéns! Você ganhou em ${jogadas} jogadas!`);
                }, 100)

            }

        } else {
            setTimeout(desvirar, 1000, carta);
            carta_anterior = '';
        }

    }
}

function desvirar(carta) {
    const carta_antiga = document.querySelector('.standby');
    carta_antiga.classList.remove('standby');
    carta_antiga.classList.remove('virar');
    carta.classList.remove('virar');
}