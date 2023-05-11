const bar = document.querySelector("#bar")
const navbar = document.querySelector("#navbar")
const closee = document.querySelector("#close")
if (bar) {
    bar.addEventListener("click", () => {
        navbar.classList.add("active")
    })
}

if (closee) {
    closee.addEventListener("click", () => {
         navbar.classList.remove("active");
    })
}