console.log("script carregou");

function embaralhar(lista) {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

const cartas = document.querySelectorAll(".carta");

cartas.forEach(function (carta) {
    carta.addEventListener("click", function() {
        carta.classList.toggle("virada");
    });
});

const nomes = ["Bola", "Chuteira", "Apito", "Luva", "Camisa", "Troféu", "Cartão", "Bandeirinha"];

function iniciar() {
    const baralho = embaralhar([...nomes, ...nomes]);
    cartas.forEach(function (carta, i) {
        carta.querySelector(".verso").textContent = baralho[i];
    });
}

iniciar();