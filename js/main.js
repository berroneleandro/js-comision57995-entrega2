console.log("MENU")
console.log("-------------------")
for (let i = 0; i < platosDeComida.length ; i++) {
    console.log("Plato: " + platosDeComida[i].nombre);
    console.log("Precio: $" + platosDeComida[i].precio);
    console.log("Stock: " + platosDeComida[i].stock + " unidades");
    console.log("Numero de oden "+platosDeComida[i].NumeroDeOrden);
    console.log("-----------------------");
}



let pedido;
let sumarPrecios=[];


function buscarPedido(){

    if(pedido>=1&&pedido<=platosDeComida.length){
        let platoElegido=platosDeComida[pedido-1];
        
        console.log("su pedido es "+platoElegido.nombre)
        console.log("--------------")

    }
    else if(pedido==0){
        alert("gracias por su orden");

    }
    else{
        alert("pedido invalido")
    }
        
}

function sumarPedido(){
    if(pedido>=1&&pedido<=platosDeComida.length){
        platoElegido=platosDeComida[pedido-1];
        
        sumarPrecios.push(platoElegido.precio);


    }


}

function sumaTotal(pedidos){
    const Total = pedidos.reduce ((a, b) =>a+b,0)
    
    for(let i=0;i<pedidos[i];i++){

        console.log("-------------")

    
        console.log("precio "+pedidos[i]);
    }

    console.log("-----------------")
    console.log("el total es "+Total);
   
}


while(pedido!=0){

    pedido=Number(prompt("ingrese numero de orden o 0 para salir"));

    buscarPedido();
    sumarPedido();



}

sumaTotal(sumarPrecios);






