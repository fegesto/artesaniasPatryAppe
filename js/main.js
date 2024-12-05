let loginOK;
let pass;

function checkLoginStatus() {
    const loginStatus = localStorage.getItem("loginOK") === "true";

    // Si el usuario no está logueado va a login
    if (!loginStatus && !window.location.pathname.endsWith("/login.html")) {
        window.location.href = "/pages/login.html";
    }
}

window.addEventListener("DOMContentLoaded", checkLoginStatus);

function toggleLoginLink() {
    const loginStatus = localStorage.getItem("loginOK") === "true";
    const loginLink = document.getElementById("loginLink");

    // Si el usuario está logueado, oculta el enlace de login
    if (loginStatus && loginLink) {
        loginLink.style.display = "none";
    }
}

// Ejecuta la función cuando se cargue la página
window.addEventListener("DOMContentLoaded", toggleLoginLink);