let form = document.querySelector(".formIngreso");

form.onsubmit = function () {

    let email = form.email.value;
    let password = form.password.value;
    let password2 = form.password2.value;
    let terminos = form.terminos.checked;

    
    if (email === "") {
        alert("El email es obligatorio.");
        return false;
    }

    if (password === "") {
        alert("La contraseña es obligatoria.");
        return false;
    }

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }

    if (password !== password2) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    if (!terminos) {
        alert("Debes aceptar los términos y condiciones.");
        return false;
    }

    alert("Registro exitoso. Ahora podés iniciar sesión.");
    location.href = "./index.html";
    return false;
};
