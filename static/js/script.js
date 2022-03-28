const alert = document.querySelector("section.alert");

alert.addEventListener("click", () => {
    alert.remove();
})

const apple = document.querySelector("article.apple");
const pokemon = document.querySelector("article.pokemon");
const lyrics = document.querySelector("article.lyrics");

apple.addEventListener("click", () => {
    window.location.href = "portfolio/apple-remake.html";
})
pokemon.addEventListener("click", () => {
    window.location.href = "portfolio/pokemon-battle.html";
})
lyrics.addEventListener("click", () => {
    window.location.href = "portfolio/lyrics-video.html";
})

