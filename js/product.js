let queryString = location.search; 
let queryStringObj = new URLSearchParams(queryString); 
let id = queryStringObj.get("id"); 

let url = "https://dummyjson.com/products/" + id;

let imagen = document.querySelector("#fotoProducto"); 
let titulo = document.querySelector("#nombreDelProducto"); 
let categoria = document.querySelector("#categoriaDelProducto"); 
let descripcion = document.querySelector("#descripcionDelProducto"); 
let precio = document.querySelector("#precioDelProducto"); 
let stock = document.querySelector("#stockDelProducto"); 
let productoTags = document.querySelector("#listaDeTags"); 
let reviewContainer = document.querySelector("#review"); 

