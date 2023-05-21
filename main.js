// Simulador -> Agregar producto a una lista de productos
class Producto {
    constructor(id, nombre, categoria, precio) {
        this.id = ++id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }
}

listadoProductos();
function listadoProductos() {
    // inicio de programa
    const Productos = [
        Producto = {
            Nombre: 'Medias deportivas',
            Categoria: 'Ropa',
            Precio: 150,
            id: 0
        },
        Producto = {
            Nombre: 'Coca Cola 3L',
            Categoria: 'Bebida',
            Precio: 180,
            id: 1
        },
        Producto = {
            Nombre: 'Jabón Bulldog',
            Categoria: 'Higiene',
            Precio: 40,
            id: 2
        },
        Producto = {}
    ]

    // Flujo de programa
    let confirmar = confirm('¿Desea agregar objetos?');

    while (confirmar === true) {
        // Variables
        Producto = {
            nombre: pedirNombre(),
            categoria: pedirCategoria(),
            precio: pedirPrecio()
        }

        let guardar = confirm(`Desea guardar el objeto con los siguientes valores:\nNombre: ${Producto.nombre}\nCategoria: ${Producto.categoria}\nPrecio: $${Producto.precio}`);

        if (guardar === false) {
            alert('Reinicie para comenzar desde 0');
            location.reload();
            return
        }

        Productos.push(Producto);
        confirmar = confirm('¿Desea continuar agregando objetos?');
    }

    //Funciones para definir los valores de los objetos 
    function pedirNombre() {
        let nombreProducto = prompt('Por favor, ingrese el nombre del producto');
        return nombreProducto;
    }
    function pedirCategoria() {
        let categoriaProducto = prompt('Por favor, ingrese la categoria del producto');
        return categoriaProducto;
    }

    function pedirPrecio() {
        let precioProducto = prompt('Por favor, ingrese el precio del producto');
        return precioProducto;
    }

    alert('Abra la consola para ver los resultados');
    console.table(Productos);
}