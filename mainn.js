class Productos{
    constructor(id, sku, nombre, precio, tipo, categoria){
        this.id = id;
        this.sku = sku;
        this.nombre = nombre;
        this.precio = precio;
        this.tipo = tipo;
        this.categoria = categoria;
    }
 }

 const arrayProductos = [];

 const producto1 = new Productos(1, 'ASD1', 'Demon Slayer 01', 600, 'MANGA', 'SHONEN');
 const producto2 = new Productos(2, 'ASD2', 'Dragon ball Z 01', 600, 'MANGA', 'SHONEN');
 const producto3 = new Productos(3, 'ASD3', 'Demon Slayer 02', 600, 'MANGA', 'SHONEN');
 const producto4 = new Productos(4, 'ASD4', 'Banana Fish 01', 600, 'MANGA', 'SHOUJO');
 const producto5 = new Productos(5, 'ASD5', 'Code Geass 01', 600, 'MANGA', 'SEINEN');
 const producto6 = new Productos(6, 'ASD6', 'Orange 01', 600, 'MANGA', 'SHOUJO');
 const producto7 = new Productos(7, 'ASD7', 'Ao Haru Ride 01', 600, 'MANGA', 'SHOUJO');
 const producto8 = new Productos(8, 'ASD8', 'My hero academy 01', 600, 'MANGA', 'SHONEN');
 const producto9 = new Productos(9, 'ASD9', 'Attack on titan 01', 600, 'MANGA', 'SHONEN');
 const producto10 = new Productos(10, 'ASD10', 'Spider man 01', 1000, 'COMIC', 'ACCION');
 const producto11 = new Productos(11, 'ASD10', 'Spider man 02', 1000, 'COMIC', 'ACCION');
 const producto12 = new Productos(12, 'ASD10', 'Spider man 03', 1000, 'COMIC', 'ACCION');
 const producto13 = new Productos(13, 'ASD10', 'Batman 01', 1500, 'COMIC', 'ACCION');
 const producto14 = new Productos(14, 'ASD10', 'Batman 02', 1500, 'COMIC', 'ACCION');
 const producto15 = new Productos(15, 'ASD10', 'Superman man 01', 1600, 'COMIC', 'DRAMA');


 arrayProductos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15);


// Filtra por CATEGORIA 
const tipo = () => {
    let elegirCategoriaManga = prompt("Porfavor seleccione lo que busca"+'\n'+"MANGA"+'\n'+"COMIC");
    const filtro = arrayProductos.filter(producto => producto.tipo === elegirCategoriaManga.toUpperCase());
    let array = [];
    filtro.forEach(producto => array.push(producto.nombre+' $'+producto.precio));
    alert('Lista:'+'\n'+array.join('\n'));
    deseaOrdenar();


}

const filtrar = () =>{
    const filtrado =confirm('¿Quiere seleccionar por categoria?');
    if (filtrado){
        tipo();
    } else {
        lista();
        
    }
}

const lista = () =>{
    let array = [];
    arrayProductos.forEach(producto => array.push(producto.nombre+' '+producto.categoria+' $'+producto.precio));
    alert('Lista'+'\n'+array.join('\n'));
    comprarProductos();
}

const menorMayor = () => {
    arrayProductos.sort((a, b) => a.precio - b.precio);
    alert(lista());
    comprarProductos();
};

// Función para ordenar precio de mayor a menor
const mayorMenor = () => {
    arrayProductos.sort((a, b) => b.precio - a.precio);
    alert(lista());
    comprarProductos();
};

const deseaOrdenar = () =>{
     const orden =confirm('¿Quiere ordenar por menor a mayor?');
    if (orden){
        menorMayor();
    } else {
        mayorMenor();
    }
    
}
const comprarProductos = () => {
    let productoSku = '';
    let productoCantidad = 0;
    let total = 0;
    let seguirComprando = false;

    do {
        productoSku = prompt('¿Que deseas comprar? porfavor ingresa su SKU'+'\n'+'SKU: ASD1 = Demon Slayer 01'+'\n'+
        'SKU: ASD2 = Dragon ball Z 01'+'\n'+
       'SKU: ASD3 = Demon Slayer 02'+'\n'+
        'SKU: ASD4 = Banana Fish 01'+'\n'+
        'SKU: ASD5 = Code Geass 01'+'\n'+
        'SKU: ASD6 = Orange 01'+'\n'+
       'SKU: ASD7 = Ao Haru Ride 01'+'\n'+
        'SKU: ASD8 = My hero academy 01'+'\n'+
        'SKU: ASD9 = Attack on titan 01'+'\n'+
        'SKU: ASD10 = Spider man 01'+'\n'+
       'SKU: ASD10 = Spider man 02'+'\n'+
        'SKU: ASD10 = Spider man 03'+'\n'+
        'SKU: ASD10 = Batman 01'+'\n'+
        'SKU: ASD10 = Batman 02'+'\n'+
        'SKU: ASD10 = Superman man 01');
        productoCantidad = parseInt(prompt('¿Cuantos queres comprar?'));

        const producto = arrayProductos.find(producto => producto.sku === productoSku.toUpperCase());

        if (producto) {
            total += producto.precio * productoCantidad;
        } else {
            alert('El producto no se encuentra en stock.');
        }

        seguirComprando = confirm('¿Queres agregar otro producto?');

    } while (seguirComprando)

    aplicarDescuento(total);
}
function aplicarDescuento(totalCompra) {
    if (totalCompra >= 5000) {
        totalCompra = totalCompra * 0.80;
        alert('Tenes un 20% de descuento!');
    }
    calcularEnvio(totalCompra)
}

function calcularEnvio(totalCompra) {
    let tieneEnvioADomicilio = confirm('Queres envio a domicilio?');

    if (tieneEnvioADomicilio && totalCompra >= 2000) {
        alert('Tenes envio gratis. El total de la compra es: '+totalCompra);
    } else if (tieneEnvioADomicilio && totalCompra < 2000 && totalCompra !== 0) {
        totalCompra += 700;
        alert('El envío cuesta $700. El total de la compra es: '+totalCompra);
    } else {
        alert('El total de la compra es: '+totalCompra);
    }
};


filtrar();

