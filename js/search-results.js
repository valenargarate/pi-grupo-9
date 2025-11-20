const queryString = location.search;
const queryStringObj = new URLSearchParams(queryString);

let terminoBuscado = queryStringObj.get('resultados');

if (terminoBuscado === null) {
    terminoBuscado = '';
}

const listaProductos = document.querySelector('.velasIndex1');
const parrafoResultados = document.querySelector('.velap strong');
const parrafoH = document.querySelector('.hint');

parrafoResultados.innerText = terminoBuscado;

if (terminoBuscado.trim() === '') {

    listaProductos.innerHTML = '';

    parrafoH.innerText = 'No ingresaste ningún término de búsqueda.';
    parrafoH.style.display = 'block';

} else {

    const url = 'https://dummyjson.com/products/search?q=' + terminoBuscado;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            const productos = data.products;

            listaProductos.innerHTML = '';

            let contenido = '';

            if (productos.length === 0) {

                parrafoH.innerText = 'No encontramos resultados para "' + terminoBuscado + '"';
                parrafoH.style.display = 'block';

            } else {

                parrafoH.style.display = 'none';

                let i = 0;
                while (i < productos.length) {

                    const producto = productos[i];

                    const detalleHref = './product.html?id=' + producto.id;

                    contenido = contenido +
                        '<li class="velas">' +
                            '<img src="' + producto.thumbnail + '" alt="' + producto.title + '">' +
                            '<h4>' + producto.title + '</h4>' +
                            '<p>' + producto.description + '</p>' +
                            '<div>$ ' + producto.price + '</div>' +
                            '<a href="' + detalleHref + '">Ver detalle</a>' +
                        '</li>';

                    i = i + 1;
                }

                listaProductos.innerHTML = contenido;
            }
        });
}
