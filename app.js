const productos=[
    {
        id:1,
        nombre:'Pizza Aericana',
        precio:25
    },
    {
        id:2,
        nombre:'Pizza Española',
        precio:30
    },
    {
        id:3,
        nombre:'Pizza Latina',
        precio:35
    }
]

let rpt;
let carrito=[];

const agregarCarrito=(productId,quantity)=>{
    const product=productos.find(product=>product.id==productId);
    carrito=[
        ...carrito,
        {
            ...product,
            cantidad:quantity
        }
    ]
    console.log(carrito)
}
const calcularTotal=()=>{
    
}
while(rpt!=0){
    let productId=prompt('Ingrese el id del producto:\n1:Pizza Aericana\n2:Pizza Española\n3:Pizza Latina');
    let c=prompt('Ingrese la cantidad')
    agregarCarrito(productId,c)
    rpt=prompt('Desea continuar: si=cualquier tecla no=0')
    if(rpt==0){
        calcularTotal()
    }
}
