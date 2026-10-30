console.log("script carregou");
const cartas = document.querySelectorAll(".carta");

cartas.forEach(function (carta) {
    carta.addEventListener("click", function() {
        carta.classList.toggle("virada");
    });
});