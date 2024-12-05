function cart(){
    
    let carrito = "";
    let totalPrecio = 0;
    let finalizaCompra = false;

    while(!finalizaCompra){
        
        const producto = [
            "Sahumerios x 30 unidades",
            "Velas de soja",
            "Almohadon matero",
            "Perfuminas para ropa (Vainicoco)",
            "Amigurumi minions",
        ];
        
        let mensaje = "Elegí un producto de la siguiente lista, para terminar elegí cancelar:\n";
        for (var i = 0; i < producto.length; i++) {
        mensaje += (i + 1) + ") " + producto[i] + "\n";
        }
        
        let codigoArticulo = prompt(mensaje);
        console.log(codigoArticulo);

        let articulo = seleccionArticulo(codigoArticulo);
        console.log(articulo);

        if (articulo.articulo) {
            alert("Agregaste "+ articulo.articulo + " al carrito")
            carrito += "\n" + articulo.articulo;
            totalPrecio += parseFloat(articulo.precio);

        } else if (codigoArticulo === null){

            finalizaCompra = true;

        } else {
            alert("El código de producto que ingresaste no existe, por favor, probá de nuevo");
        }
    }

    let compraFinal = confirm("Confirmás la compra de: "+ carrito + "\npor un tota: $" + totalPrecio);

    if (compraFinal) {
        alert("Gracias por tu compra, el total es de: $"+totalPrecio);
    } else {
        alert("Que lastima que no quieras continuar con tu pedido. Te esperamos la próxima");
    }

}

function seleccionArticulo(codigoArticulo){

    let articulo;
    let precio = 0;

    switch(codigoArticulo) {
    
        case "1" :
            articulo = "Sahumerios x 30 unidades" ;
            precio = 1500;
            break;

        case "2" :
            articulo = "Velas de soja" ;
            precio = 3000;
            break; 

        case "3" : 
            articulo = "Almohadon matero" ;
            precio = 25000;
            break;

        case "4" : 
            articulo = "Perfuminas para ropa (Vainicoco)"
            precio = 2100;
            break;     

        case "5" : 
            articulo = "Amigurumi minions" ;
            precio = 10000;
            break; 

        default :        
            articulo = false ;

    }


    return { articulo, precio} ;


}