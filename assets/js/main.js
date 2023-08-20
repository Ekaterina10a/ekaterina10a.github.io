document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger-menu").addEventListener("click", function () {
        document.querySelector(".nav-mobile-active").classList.toggle("open")
        document.querySelector(".exit-icon-mobile").classList.toggle("open")
    })
})