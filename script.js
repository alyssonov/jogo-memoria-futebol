function embaralhar(lista) {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}
let primeira = null;
let travado = false;
let jogadas = 0;
let acertos = 0;
function atualizarPlacar() {
    document.querySelector("#jogadas").textContent = jogadas;
    document.querySelector("#acertos").textContent = acertos;
}
function clicar(carta) {
    if (travado) return;
    if (carta.classList.contains("virada")) return;
    carta.classList.add("virada");
    if (primeira === null) {
        primeira = carta;
    } else {
      const nome1 = primeira.querySelector(".verso").textContent;
      const nome2 = carta.querySelector(".verso").textContent;
      jogadas++;
      if (nome1 === nome2) {
        acertos++;
        if (acertos === 8) {
           document.querySelector("#mensagem").textContent = "Você venceu em " + jogadas + " jogadas!";
        }
        primeira = null;
      } else {
        const anterior = primeira;
        primeira = null;
        travado = true;
        setTimeout(function () {
            anterior.classList.remove("virada");
            carta.classList.remove("virada");
            travado = false;
        }, 1000);
      }
      atualizarPlacar();
    }
}
const cartas = document.querySelectorAll(".carta");
cartas.forEach(function (carta) {
    carta.addEventListener("click", function () {
        clicar(carta);
    });
});
const nomes = ["Bola", "Chuteira", "Apito", "Luva", "Camisa", "Troféu", "Cartão", "Bandeirinha"];
function iniciar() {
    const baralho = embaralhar([...nomes, ...nomes]);
    cartas.forEach(function (carta, i) {
        carta.classList.remove("virada");
        carta.querySelector(".verso").textContent = baralho[i];
    });
    primeira = null;
    travado = false;
    jogadas = 0;
    acertos = 0;
    document.querySelector("#mensagem").textContent = "";
    atualizarPlacar();
}
document.querySelector("#reiniciar").addEventListener("click", iniciar);
iniciar();
