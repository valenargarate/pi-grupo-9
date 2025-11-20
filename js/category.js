const queryString = location.search;
const queryStringObj = new URLSearchParams(queryString);

let categoriaId = queryStringObj.get('id');

if (categoriaId === null) {
    categoriaId = 'beauty';
}

const tituloCategoria = document.querySelector('#categoryTitle');
const listaProductos = document.querySelector('.velasIndex1');

if (tituloCategoria !== null) {
    tituloCategoria.innerText = 'Categoría: ' + categoriaId;
}

const url = 'https://dummyjson.com/products/category/' + categoriaId;

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        const productos = data.products;

        listaProductos.innerHTML = '';

        let contenido = '';

        for (let i = 0; i < productos.length; i++) {

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
        }

        listaProductos.innerHTML = contenido;
    })
    .catch(function (error) {
        console.log('Error al cargar productos: ', error);
        listaProductos.innerHTML = '<li>No se pudieron cargar los productos de esta categoría.</li>';
    });
