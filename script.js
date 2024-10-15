document.querySelector("button").addEventListener("click", function(event) {
    const email = document.getElementById("correo-electronico").value;
    const password = document.getElementById("password").value;
    const agree = document.getElementById("agree").checked;
    const rutaSeleccionada = document.querySelector("input[name='ruta']:checked");

    // Validar que los campos no estén vacíos
    if (!email) {
        alert("Por favor, introduce tu correo electrónico.");
        event.preventDefault(); // Evita el envío del formulario
    } else if (!password) {
        alert("Por favor, introduce tu contraseña.");
        event.preventDefault();
    } else if (!rutaSeleccionada) {
        alert("Por favor, selecciona tu ruta favorita.");
        event.preventDefault();
    } else if (!agree) {
        alert("Debes aceptar los términos y condiciones.");
        event.preventDefault();
    } else {
        // Si todo está bien, cambiar el texto del botón
        this.innerText = "Enviado con éxito";
        this.style.backgroundColor = "green";
        this.style.color = "white";
    }
});
