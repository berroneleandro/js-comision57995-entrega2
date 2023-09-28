/* console.log("MENU")
console.log("-------------------")
for (let i = 0; i < platosDeComida.length ; i++) {
    console.log("Plato: " + platosDeComida[i].nombre);
    console.log("Precio: $" + platosDeComida[i].precio);
    console.log("Stock: " + platosDeComida[i].stock + " unidades");
    console.log("Numero de oden "+platosDeComida[i].NumeroDeOrden);
    console.log("-----------------------");
}
console.log("Bebidas")
console.log("-------------------")
for (let i = 0; i < bebidas.length ; i++) {
    console.log("Bebida: " + bebidas[i].nombre);
    console.log("Precio: $" + bebidas[i].precio);
    console.log("Stock: " + bebidas[i].stock + " unidades");
    console.log("Numero de oden "+bebidas[i].NumeroDeOrden);
    console.log("-----------------------");
} */



let carga=document.getElementById("comidas");
let pedido=carga.value;

let CargaBebidas=document.getElementById("bebidas");
let bebida=CargaBebidas.value;

let listaPedido = document.querySelector('#listaPedidos');

const cargar=document.querySelector('#btnCarga');
const finalizar=document.querySelector('#btnfinalizar');
const borrar=document.querySelector('#btnBorrar');


let sumarPrecios=[];
let sumarPreciosBebida=[];
let pedidoAbiertos=[];
let pedidoAbiertos2=[]; 
let pedidoAbierto3=[];

/* cargar.addEventListener('click',buscarPedido(pedidoAbiertos));
finalizar.addEventListener('click',sumaTotal(sumarPrecios,sumarPreciosBebida)); */
borrar.addEventListener('click',borrarPedido);

 document.addEventListener('DOMContentLoaded',()=>{
    if(JSON.parse(localStorage.getItem('pedidos'))==null){
        pedidoAbiertos=[]
        
        
    }else{
        pedidoAbiertos=JSON.parse(localStorage.getItem('pedidos'))
    }
    
    
    if(JSON.parse(localStorage.getItem('pedidos 2'))==null){
        pedidoAbiertos2=[]
    }else{
        pedidoAbiertos2=JSON.parse(localStorage.getItem('pedidos 2'))

    } 
    if(JSON.parse(localStorage.getItem('pedidos 3'))==null){
        pedidoAbierto3=[]
    }else{
        pedidoAbierto3=JSON.parse(localStorage.getItem('pedidos 3'))

    } 
     dibujarPedidos(listaPedido2,pedidoAbiertos2);
    dibujarPedidos(listaPedido,pedidoAbiertos);  
    dibujarPedidos(listaPedido3,pedidoAbierto3);
})
  
/* function leerPedidos(comidas,bebidas){
    
    const infoPedido={
        plato:comidas.nombre,
        precioPlato:comidas.precio,
        bebida:bebidas.nombre,
        precioBebidas:bebidas.precio
    }
    pedidoAbiertos.push(infoPedido)
    
    

    dibujarPedidos();
}  */

function dibujarPedidos(lista,pedidosA){
    limpiarCarrito(lista);
    
    pedidosA.forEach(productos=>{
        const fila = document.createElement('tr')
        fila.innerHTML =`
        
        <td>${productos.plato}</td>
        <td>${productos.precioPlato}</td>
        <td>${productos.bebida}</td>
        <td>${productos.precioBebidas}</td>
                                  
        
        `;
        lista.appendChild(fila)

    })
    sincronizar();
}
function limpiarCarrito(lista){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }
}

function vaciarPedidos(){
    while(listaPedido.firstChild){
        listaPedido.removeChild(listaPedido.firstChild)
    }
    pedidoAbiertos=[];
    sincronizar();
}

/* function buscarPedido(){
        carga=document.getElementById("comidas");
        pedido=carga.value;
    
        let platoElegido=platosDeComida[pedido-1];
        
        if(platoElegido.stock>=1){
        
        console.log("su pedido es "+platoElegido.nombre);
        
        platoElegido.stock-=1;
        console.log("stok " +platoElegido.stock);
        
            
        }else{
            console.log("sin stock de "+platoElegido.nombre);

        }
        CargaBebidas=document.getElementById("bebidas");
        bebida=CargaBebidas.value;

        let BebidaElegida=bebidas[bebida-1];
        if(BebidaElegida.stock>=1){
            BebidaElegida.stock-=1;
            console.log("su Bebida es "+BebidaElegida.nombre);
            console.log("stok " +BebidaElegida.stock);
        }else{
            console.log("sin stock de "+BebidaElegida.nombre);
        }

        console.log("--------------");
        leerPedidos(platoElegido,BebidaElegida);
        sumarPedido();

 } */

 function buscarPedido(pedidoA){
    pedido=carga.value;
    bebida=CargaBebidas.value;


    let platoElegido=platosDeComida[pedido-1];
    
    if(platoElegido.stock>=1){
    
    console.log("su pedido es "+platoElegido.nombre);
    
    platoElegido.stock-=1;
    console.log("stok " +platoElegido.stock);
    
        
    }else{
        console.log("sin stock de "+platoElegido.nombre);
        platoElegido.nombre="sin stok";
        platoElegido.precio=0;

    }
    

    let BebidaElegida=bebidas[bebida-1];
    if(BebidaElegida.stock>=1){
        BebidaElegida.stock-=1;
        console.log("su Bebida es "+BebidaElegida.nombre);
        console.log("stok " +BebidaElegida.stock);
    }else{
        console.log("sin stock de "+BebidaElegida.nombre);
        BebidaElegida.nombre="sin stok";
        BebidaElegida.precio=0;
    }

    console.log("--------------");
     /* leerPedidos2(platoElegido,BebidaElegida);  */
     const infoPedido={
        plato:platoElegido.nombre,
        precioPlato:platoElegido.precio,
        bebida:BebidaElegida.nombre,
        precioBebidas:BebidaElegida.precio
    } 
    pedidoA.push(infoPedido)
    sumarPedido();
    dibujarPedidos(listaPedido,pedidoAbiertos);

}
    
function sumarPedido(){
    let BebidaElegida=bebidas[bebida-1];
    let platoElegido=platosDeComida[pedido-1];

    if(platoElegido.stock>=1){
        
        let platoElegido=platosDeComida[pedido-1];
        sumarPrecios.push(platoElegido.precio);
    }

    if(BebidaElegida.stock>=1){
        let BebidaElegida=bebidas[bebida-1];

        sumarPreciosBebida.push(BebidaElegida.precio);
    }
    




}
function sumaTotal(pedidos,bebidas){
    let Total = pedidos.reduce ((a, b) =>a+b,0);
    let TotalBebidas=bebidas.reduce ((a, b) =>a+b,0);
    
    for(let i=0;i<pedidos[i];i++){

        console.log("------------------------------------------")

    
        console.log("orden "+[i+1]+" Plato precio "+pedidos[i]);
        console.log("orden "+[i+1]+" Bebidas precio "+bebidas[i]);
    }

    let PrecioTotal=Total+TotalBebidas;

    
    console.log("-----------------"),
    console.log("total de menu: "+Total);
    console.log("total de Bebida: "+TotalBebidas);
    console.log("___________________________")
    console.log("el total es : "+PrecioTotal);
    let montototal=document.getElementById("montoTotal");
    montototal.innerText=PrecioTotal;
    sumarPrecios.splice(0, sumarPrecios.length);
    sumarPreciosBebida.splice(0,sumarPreciosBebida.length);

    vaciarPedidos();
   
}

function borrarPedido(){

    if(sumarPrecios&&sumarPreciosBebida){
    let pedidoBorrado=platosDeComida[pedido-1];
    let bebidaBorrada=bebidas[bebida-1];
    
    console.log("-----------------------------");
    console.log("pedido borrado : "+pedidoBorrado.nombre+" y "+bebidaBorrada.nombre);
    
    console.log("-----------------------------");


    sumarPrecios.pop();
    sumarPreciosBebida.pop();
    pedidoAbiertos.pop();
    }else{
        console.log("No hay orden abierta")
    }
    dibujarPedidos(listaPedido,pedidoAbiertos);

}

function sincronizar(){
    localStorage.setItem('pedidos',JSON.stringify(pedidoAbiertos))
    localStorage.setItem('pedidos 2',JSON.stringify(pedidoAbiertos2)) 
    localStorage.setItem('pedidos 3',JSON.stringify(pedidoAbierto3)) 
}

// ----------------------------logica para mesa 2---------------------
let carga2=document.getElementById("comidas2");
let pedido2=carga2.value;
let CargaBebidas2=document.getElementById("bebidas2");
let bebida2=CargaBebidas2.value;
let listaPedido2 = document.querySelector('#listaPedidos2');


let sumarPrecios2=[];
let sumarPreciosBebida2=[];




 function leerPedidos2(comidas,bebidas){
    
    const infoPedido2={
        plato:comidas.nombre,
        precioPlato:comidas.precio,
        bebida:bebidas.nombre,
        precioBebidas:bebidas.precio
    }
    pedidoAbiertos2.push(infoPedido2)
    
    /* dibujarPedidos2(); */
    dibujarPedidos(listaPedido2,pedidoAbiertos2);
} 
/* function dibujarPedidos2(){
    limpiarCarrito2();
    
    pedidoAbiertos2.forEach(productos=>{
        const fila2 = document.createElement('tr')
        fila2.innerHTML =`
        
        <td>${productos.plato}</td>
        <td>${productos.precioPlato}</td>
        <td>${productos.bebida}</td>
        <td>${productos.precioBebidas}</td>
                                  
        
        `;
        listaPedido2.appendChild(fila2)

    })
    sincronizar();
} */
function limpiarCarrito2(){
    while(listaPedido2.firstChild){
        listaPedido2.removeChild(listaPedido2.firstChild)
    }
}
function vaciarPedidos2(){
    while(listaPedido2.firstChild){
        listaPedido2.removeChild(listaPedido2.firstChild)
    }
    pedidoAbiertos2=[];
    sincronizar();
}
function buscarPedido2(){
    
    pedido2=carga2.value;

    let platoElegido=platosDeComida[pedido2-1];
    
    if(platoElegido.stock>=1){
    
    console.log("su pedido es "+platoElegido.nombre);
    
    platoElegido.stock-=1;
    console.log("stok " +platoElegido.stock);
    
        
    }else{
        console.log("sin stock de "+platoElegido.nombre);

    }
    
    bebida2=CargaBebidas2.value;

    let BebidaElegida=bebidas[bebida2-1];
    if(BebidaElegida.stock>=1){
        BebidaElegida.stock-=1;
        console.log("su Bebida es "+BebidaElegida.nombre);
        console.log("stok " +BebidaElegida.stock);
    }else{
        console.log("sin stock de "+BebidaElegida.nombre);
    }

    console.log("--------------");
    leerPedidos2(platoElegido,BebidaElegida);

}
function sumarPedido2(){
    let BebidaElegida=bebidas[bebida2-1];
    let platoElegido=platosDeComida[pedido2-1];

    if(platoElegido.stock>=1){
        
        let platoElegido=platosDeComida[pedido2-1];
        sumarPrecios2.push(platoElegido.precio);
    }

    if(BebidaElegida.stock>=1){
        let BebidaElegida=bebidas[bebida2-1];

        sumarPreciosBebida2.push(BebidaElegida.precio);
    }

}
function sumaTotal2(pedidos,bebidas){
    let Total = pedidos.reduce ((a, b) =>a+b,0);
    let TotalBebidas=bebidas.reduce ((a, b) =>a+b,0);
    
    for(let i=0;i<pedidos[i];i++){

        console.log("------------------------------------------")

    
        console.log("orden "+[i+1]+" Plato precio "+pedidos[i]);
        console.log("orden "+[i+1]+" Bebidas precio "+bebidas[i]);
    }

    let PrecioTotal=Total+TotalBebidas;

    
    console.log("-----------------"),
    console.log("total de menu: "+Total);
    console.log("total de Bebida: "+TotalBebidas);
    console.log("___________________________")
    console.log("el total es : "+PrecioTotal);
    let montototal=document.getElementById("montoTotal2");
    montototal.innerText=PrecioTotal;
    sumarPrecios2.splice(0, sumarPrecios2.length);
    sumarPreciosBebida2.splice(0,sumarPreciosBebida2.length);

    vaciarPedidos2();
   
}
function borrarPedido2(){

    if(sumarPrecios&&sumarPreciosBebida){
    let pedidoBorrado=platosDeComida[pedido2-1];
    let bebidaBorrada=bebidas[bebida2-1];
    
    console.log("-----------------------------");
    console.log("pedido borrado : "+pedidoBorrado.nombre+" y "+bebidaBorrada.nombre);
    
    console.log("-----------------------------");


    sumarPrecios2.pop();
    sumarPreciosBebida2.pop();
    pedidoAbiertos2.pop();
    }else{
        console.log("No hay orden abierta")
    }
    dibujarPedidos(listaPedido2,pedidoAbiertos2);

}

//----------------------------logica 3-------------

let carga3=document.getElementById("comidas3");
let pedido3=carga3.value;
let CargaBebidas3=document.getElementById("bebidas3");
let bebida3=CargaBebidas3.value;
let listaPedido3 = document.querySelector('#listaPedidos3');


let sumarPrecios3=[];
let sumarPreciosBebida3=[];

 function leerPedidos3(comidas,bebidas){
    
    const infoPedido3={
        plato:comidas.nombre,
        precioPlato:comidas.precio,
        bebida:bebidas.nombre,
        precioBebidas:bebidas.precio
    }
    pedidoAbierto3.push(infoPedido3)
    
    /* dibujarPedidos2(); */
    dibujarPedidos(listaPedido3,pedidoAbierto3);
}   

function limpiarCarrito3(){
    while(listaPedido3.firstChild){
        listaPedido3.removeChild(listaPedido3.firstChild)
    }
}
function vaciarPedidos3(){
    while(listaPedido3.firstChild){
        listaPedido3.removeChild(listaPedido3.firstChild)
    }
    pedidoAbierto3=[];
    sincronizar();
}
function buscarPedido3(){
    
    pedido3=carga3.value;

    let platoElegido=platosDeComida[pedido3-1];
    
    if(platoElegido.stock>=1){
    
    console.log("su pedido es "+platoElegido.nombre);
    
    platoElegido.stock-=1;
    console.log("stok " +platoElegido.stock);
    
        
    }else{
        console.log("sin stock de "+platoElegido.nombre);

    }
    
    bebida3=CargaBebidas3.value;

    let BebidaElegida=bebidas[bebida3-1];
    if(BebidaElegida.stock>=1){
        BebidaElegida.stock-=1;
        console.log("su Bebida es "+BebidaElegida.nombre);
        console.log("stok " +BebidaElegida.stock);
    }else{
        console.log("sin stock de "+BebidaElegida.nombre);
    }

    console.log("--------------");
    leerPedidos3(platoElegido,BebidaElegida);

}
function sumarPedido3(){
    let BebidaElegida=bebidas[bebida3-1];
    let platoElegido=platosDeComida[pedido3-1];

    if(platoElegido.stock>=1){
        
        let platoElegido=platosDeComida[pedido3-1];
        sumarPrecios3.push(platoElegido.precio);
    }

    if(BebidaElegida.stock>=1){
        let BebidaElegida=bebidas[bebida3-1];

        sumarPreciosBebida3.push(BebidaElegida.precio);
    }

}
function sumaTotal3(pedidos,bebidas){
    let Total = pedidos.reduce ((a, b) =>a+b,0);
    let TotalBebidas=bebidas.reduce ((a, b) =>a+b,0);
    
    for(let i=0;i<pedidos[i];i++){

        console.log("------------------------------------------")

    
        console.log("orden "+[i+1]+" Plato precio "+pedidos[i]);
        console.log("orden "+[i+1]+" Bebidas precio "+bebidas[i]);
    }

    let PrecioTotal=Total+TotalBebidas;

    
    console.log("-----------------"),
    console.log("total de menu: "+Total);
    console.log("total de Bebida: "+TotalBebidas);
    console.log("___________________________")
    console.log("el total es : "+PrecioTotal);
    let montototal=document.getElementById("montoTotal3");
    montototal.innerText=PrecioTotal;
    sumarPrecios3.splice(0, sumarPrecios3.length);
    sumarPreciosBebida3.splice(0,sumarPreciosBebida3.length);

    vaciarPedidos3();
   
}
function borrarPedido3(){

    if(sumarPrecios&&sumarPreciosBebida){
    let pedidoBorrado=platosDeComida[pedido3-1];
    let bebidaBorrada=bebidas[bebida3-1];
    
    console.log("-----------------------------");
    console.log("pedido borrado : "+pedidoBorrado.nombre+" y "+bebidaBorrada.nombre);
    
    console.log("-----------------------------");


    sumarPrecios3.pop();
    sumarPreciosBebida3.pop();
    pedidoAbierto3.pop();
    }else{
        console.log("No hay orden abierta")
    }
    dibujarPedidos(listaPedido3,pedidoAbierto3);

}


//-------------------Menu------
let tabComidas = document.querySelector('#menuComidas');
let tabBebidas=document.querySelector('#menuBebidas');
function dibujarMenu(){

    menuComidas=platosDeComida
    menuBebidas=bebidas

    menuComidas.forEach(productos=>{
        const fila = document.createElement('tr')
        fila.innerHTML =`
        
        <td>${productos.nombre}</td>
        <td>${productos.precio}</td>
        <td>${productos.stock}</td>
        <td>${productos.NumeroDeOrden}</td>
                                  
        
        `;
        tabComidas.appendChild(fila)

    })

    menuBebidas.forEach(productos=>{
        const fila = document.createElement('tr')
        fila.innerHTML =`
        
        <td>${productos.nombre}</td>
        <td>${productos.precio}</td>
        <td>${productos.stock}</td>
        <td>${productos.NumeroDeOrden}</td>
                                  
        
        `;
        tabBebidas.appendChild(fila)

    })
    
}

dibujarMenu();