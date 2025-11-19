let logOut = document.querySelector("#logoutBtn"); 
let userMenu = document.querySelector(".menuLyr .menu"); 

if (logOut && userMenu) {
    logOut.addEventListener("click", function(e){
        e.preventDefault();

        localStorage.removeItem("userData"); 

        let saludo = document.querySelector(".saludo"); 
        let mensaje = document.querySelector(".mensaje"); 

        if (saludo) {
            saludo.innerText = ""; 
        }

        if (mensaje) {
            mensaje.innerText = ""; 
        }

        userMenu.innerHTML = `
            <li><a class="login" href="./login.html">LOGIN</a></li>
            <li><a class="categorias" href="./register.html">REGISTRO</a></li>
        `;
    });
}





    
