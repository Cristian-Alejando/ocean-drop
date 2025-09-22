document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Usuario de prueba
  const demoUser = {
    email: "admin@agua.org",
    password: "123456"
  };

  if(email === demoUser.email && password === demoUser.password) {
    message.style.color = "green";
    message.textContent = "Login exitoso ✅ Bienvenido al sistema de gestión del agua";
  } else {
    message.style.color = "red";
    message.textContent = "Credenciales incorrectas ❌";
  }
});
