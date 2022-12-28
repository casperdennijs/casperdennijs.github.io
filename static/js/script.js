const alert = document.querySelector(".alert");

alert.addEventListener("click", () => {
    alert.remove();
})

const apple = document.querySelector(".apple");
const pokemon = document.querySelector(".pokemon");
const lyrics = document.querySelector(".lyrics");

apple.addEventListener("click", () => {
    window.location.href = "portfolio/apple-remake.html";
})
pokemon.addEventListener("click", () => {
    window.location.href = "portfolio/pokemon-battle.html";
})
lyrics.addEventListener("click", () => {
    window.location.href = "portfolio/lyrics-video.html";
})

