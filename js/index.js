const btnMenu = document.querySelector("#btnMenu");
const divMenu = document.querySelector("#divMenu");
btnMenu.addEventListener("click", () => {
    divMenu.classList.toggle("hidden");
});