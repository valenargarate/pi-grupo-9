let form = document.querySelector("#loginForm"); 

form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    let email = this.email.value;
    let password = this.password.value; 

    let mensajeDeError = document.querySelector("#loginError"); 
    mensajeDeError.innerText = ""; 

    if (email === "") {
        mensajeDeError.innerText = ("El email es obligatorio."); 
        return; 
    }

    if (password === "") {
        mensajeDeError.innerText = ("La contraseña es obligatoria."); 
        return; 
    }

    if (password.length < 6){
        mensajeDeError.innerText = ("La contraseña debe tener como minimo 6 caracteres!");
        return;
    }

  let userObjeto = {
    email: email, 
    password: password
  }; 

  let userString = JSON.stringify(userObjeto);

  localStorage.setItem("userData", userString);

  this.submit();

});