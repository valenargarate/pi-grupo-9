let data = localStorage.getItem("userData"); 

let dataObj = JSON.parse(data); 

console.log(dataObj); 

let saludo = document.querySelector(".saludo"); 
let mensaje = document.querySelector(".mensaje"); 
let lista = document.querySelector(".menuLyr .menu"); 

if (dataObj) {
    if (saludo) {
        saludo.innerText = `Bienvenido ${dataObj.email}`;
    }

    if (mensaje) {
    mensaje.innerText = `Nos alegra tenerte!`;
  }

   if (lista) {
    lista.innerHTML = `
      <li><span>Bienvenido: ${dataObj.email}</span></li>
      <li><a href="#" id="logoutBtn">Logout</a></li>
    `;

} else {

  alert("No se pudo guardar los datos correctamente");

}
}