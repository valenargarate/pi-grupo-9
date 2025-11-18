const apiProductosGroceries = "https://dummyjson.com/products/category/groceries";

function cargarProductosGroceries() {
    const titulo = document.querySelector(".aleatorio h1");
    titulo.innerText = "Groceries";
    fetch(apiProductosGroceries)
        .then(function(respuesta) {
            return respuesta.json();    
        })
        .then(function(data) {
            const productos = data.products;
            const lista = document.querySelector(".velasIndex1");
            let html = "";

            //primeros 10 elementos (groceries)

            for (let i = 0; i < 10; i++) {
                const p = productos[i];
                html +=
                '<li class="velas">' +
                    '<img src="' + p.thumbnail + '" alt="' + p.title + '">' +
                    "<h4>" + p.title + "</h4>" +
                    "<p>" + p.description + "</p>" +
                    "<div>$ " + p.price + "</div>" +
                    '<a href="./product.html?id=' + p.id + '">Ver detalle</a>' +
                "</li>";
            }

            lista.innerHTML = html;
        })
}



const apiProductosCocina = "https://dummyjson.com/products/category/kitchen-accessories";

function cargarProductosCocina() {
    const titulo = document.querySelector(".destacados h1");
    titulo.innerText = "Kitchen";
    fetch(apiProductosCocina)
        .then(function(respuesta) {
            return respuesta.json();    
        })
        .then(function(data) {
            const productos = data.products;
            const lista = document.querySelector(".velasIndex2");
            let html = "";

            //10 elementos (kitchen accesories)

            for (let i = 0; i < 10; i++) {
                const p = productos[i];
                html +=
                '<li class="velas2">' +
                    '<img src="' + p.thumbnail + '" alt="' + p.title + '">' +
                    "<h4>" + p.title + "</h4>" +
                    "<p>" + p.description + "</p>" +
                    "<div>$ " + p.price + "</div>" +
                    '<a href="./product.html?id=' + p.id + '">Ver detalle</a>' +
                "</li>";
            }

            lista.innerHTML = html;
        })
}

window.addEventListener("load", function() {
  cargarProductosCocina();
  cargarProductosGroceries();
});