const formulario = document.querySelector('#searchForm'); 
const input = document.querySelector('#searchInput'); 
const error = document.querySelector('#error');

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const valor = input.value; 
    error.innerText = "";

    if (valor === "") {
        error.innerText = alert("El campo no puede quedar vacio.");
        return; 
    }

    if (valor.length < 3) {
        error.innerText = alert("Debe ingresar como minimo 3 caracteres!");
        return;
    }

    formulario.submit();

});