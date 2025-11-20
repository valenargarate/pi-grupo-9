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

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        imagen.src = data.thumbnail;
        imagen.alt = data.title; 

        titulo.innerText = data.title; 
        categoria.innerText = data.category;
        descripcion.innerText = data.description; 
        precio.innerText = "$" + data.price; 

        if (data.stock > 0) {
            stock.innerText = "Stock: " + data.stock + "unidades";    
        } else {
            stock.innerText = "Sin stock"; 
        }

        productoTags.innerHTML = ""; 
        let tags = data.tags; 

        if(tags && tags.length > 0) {
            let cantidad = tags.length; 
            if (cantidad > 3) {
                cantidad = 3; 
            }

            for (let i = 0; i < cantidad; i++) {
                productoTags.innerHTML += "<li>#" + tags[i] + "</li>"; 
            }
        }

        reviewContainer.innerHTML = ""; 

        if (data.reviews && data.reviews.length > 0) {
            for(let i = 0; i < data.reviews.length; i++) {
                let review = data.reviews[i]; 

                let texto = 
                    "<div>" +
                    "<p>⭐ " + review.rating + "</p>" +
                    "<p>" + review.comment + "</p>" +
                    "<p>" + review.date + " - " + review.reviewerName + "</p>" +
                    "</div>";
                reviewContainer.innerHTML += texto;
            }
        } else {
            reviewContainer.innerHTML = "<p>Este producto no tiene reviews.</p>";
        }
    })
    .catch(function(e) {
        console.log("ERROR:", e); 
        alert("Error al cargar el producto."); 
    }); 