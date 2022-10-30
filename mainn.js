function comprarProductos() {
    let producto = '';
    let precio = 0;
    let cantidad = 0;
    let totalCompra = 0;
    let seguirComprando = false;

    do {
        producto = prompt('Elige la opcion que desees 1 = Libro, 2 = Manga, 3 = Revista, 4 = Diario, 5 = Comic')
        cantidad = parseInt(prompt('¿Que cantidad desea llevar? (Con la compra de 10 articulos recibe un descuento del 15%)'));
        let cantidadValidada = validarCantidad(cantidad);

        switch (producto) {
            case '1':
                precio = 1000;
                break;
            case '2':
                precio = 600;
                break;
            case '3':
                precio = 700;
                break;
            case '4':
                precio = 300;
                break;
            case '5':
                precio = 2000;
                break;
            default:
                alert('Porfavor ingrese de forma correcta las opciones.');
                precio = 0;
                cantidad = 0;
                break;
        }

        totalCompra += precio * cantidadValidada;
        seguirComprando = confirm('¿Queres agregar otro producto?');

    } while (seguirComprando)

    const totalConDescuento = aplicarDescuento(totalCompra);
    const totalConEnvio = calcularEnvio(totalConDescuento);

    return totalConEnvio;
}

function validarCantidad(cantidad) {
    while(Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert('Debe agregar un número.')
        } else {
            alert('Debe ingresar un número distinto de cero.')
        }
        cantidad = parseInt(prompt('¿Cuantos queres comprar?'));
    }

    return cantidad;
}

function aplicarDescuento(totalCompra) {
    let totalConDescuento = 0;
   
    if (totalCompra >= 3500) {
        totalConDescuento = totalCompra * 0.95;
        return totalConDescuento;
    } else {
        return totalCompra;
    }
}

function calcularEnvio(totalCompra) {
    let tieneEnvioADomicilio = false;

    tieneEnvioADomicilio = confirm('Queres envio a domicilio?');

    if (tieneEnvioADomicilio && totalCompra >= 3500) {
        alert('Tenes envio gratis. El total de la compra es: '+totalCompra);
    } else if (tieneEnvioADomicilio && totalCompra < 2000 && totalCompra !== 0) {
        totalCompra += 300;
        alert('El envío cuesta $300. El total de la compra es: '+totalCompra);
    } else {
        alert('El total de la compra es: '+totalCompra);
    }

    return totalCompra;
}


function calcularTotalAPagar(totalCompra) {
    alert('El total a pagar es: $'+totalCompra);
}

const totalCompra = comprarProductos();
const cantidadValidada = validarCantidad(cantidad);


