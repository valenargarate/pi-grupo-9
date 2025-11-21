let registro = document.querySelector(".formIngreso");

registro.onsubmit = function (e) {
    e.preventDefault();  

    let email = registro.email.value;
    let password = registro.password.value;
    let password2 = registro.password2.value;
    let terminos = registro.terminos.checked;

    let msjDeError = document.querySelector("#registroError"); 
    msjDeError.innerText = ""; 

    if (email === "") {
        msjDeError.innerText = "El email es obligatorio.";
        return;
    }

    if (password === "") {
        msjDeError.innerText = "La contraseña es obligatoria.";
        return;
    }

    if (password.length < 6) {
        msjDeError.innerText = "La contraseña debe tener al menos 6 caracteres.";
        return;
    }

    if (password !== password2) {
        msjDeError.innerText = "Las contraseñas no coinciden.";
        return;
    }

    if (!terminos) {
        msjDeError.innerText = "Debes aceptar los términos y condiciones.";
        return;
    }

    location.href = "./login.html";
};
