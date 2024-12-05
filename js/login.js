//Traigo datos del formulario

const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Valido datos del usuario
function validateUser(username, password) {
  return users.some(user => user.username === username && user.password === password);
}

// Formulario de login
if (window.location.pathname.endsWith("/login.html")) {
  loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;


  if (validateUser(username, password)) {
    loginForm.style.display = 'none';
    await Swal.fire({
      icon: "success",
      title: `Hola ${username}`,
      text: "Bienvenido a nuestra tienda online",
      showConfirmButton: false,
      timer: 2000
    });
    localStorage.setItem("loginOK","true");
    window.location.replace(".././pages/products/todosLosProductos.html")
  } else {
      Swal.fire({
      icon: "error",
      title: "Hay algún dato mal",
      text: "Revisa de nuevo el usuario o contraseña que ingresaste",
    });
  }
})};