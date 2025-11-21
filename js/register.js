let form = document.querySelector(".formIngreso");

form.onsubmit = function (e) {
    e.preventDefault();  

    let email = form.email.value;
    let password = form.password.value;
    let password2 = form.password2.value;
    let terminos = form.terminos.checked;

    if (email === "") {
        alert("El email es obligatorio.");
        return;
    }

    if (password === "") {
        alert("La contraseña es obligatoria.");
        return;
    }

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    if (password !== password2) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    if (!terminos) {
        alert("Debes aceptar los términos y condiciones.");
        return;
    }

    
    let userObjeto = {
        email: email,
        password: password
    };

    let userString = JSON.stringify(userObjeto);
    localStorage.setItem("userData", userString);

    alert("Registro exitoso. Ahora podés iniciar sesión.");
    location.href = "./login.html";
};
