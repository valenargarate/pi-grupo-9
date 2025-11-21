let data = localStorage.getItem("userData");

let saludo = document.querySelector(".saludo");
let lista = document.querySelector(".menuLyr .menu");

if (data) {

    let dataObj = JSON.parse(data);

    if (saludo) {
        saludo.innerText = `Bienvenido ${dataObj.email}`;
    }

    if (lista) {
        lista.innerHTML = `
            <li><span>Bienvenido: ${dataObj.email}</span></li>
            <li><a href="#" id="logoutBtn">Logout</a></li>
        `;
    }

} else {

    if (saludo) {
        saludo.innerText = "";
    }


    if (lista) {
        lista.innerHTML = `
            <li><a class="login" href="./login.html">LOGIN</a></li>
            <li><a class="categorias" href="./register.html">REGISTRO</a></li>
        `;
    }
}
