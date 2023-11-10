import { Injectable } from '@angular/core';
import { Carrito } from '../interfaces/categorias.ts/interfaces/carrito';
import { Producto } from '../interfaces/categorias.ts/interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() {
    const memoria = localStorage.getItem('carrito');
    if(memoria) {
      this.carrito = JSON.parse(memoria)
      this.calcularTotal()
    };
   }

  carrito:Carrito[] = []
  totalCarrito: number = 0;

  //Carrito[] es un array de carrito. Accedemos a sus elementos con corchetes  

//esto se usa en la pag de producto
//como agregamos lo de cantidad hay que agregar un numero en el producto page ts porque se esperan 2 cosas, no 1
agregarProducto(producto:Producto, cantidad:number){
  const index = this.carrito.findIndex(item => item.producto.id === producto.id);
  //esa linea mira todoe l carrito, pasa por todos los items y si hay algun prodcto con el mismo id quue el que quiero agregar, me devuelve en que indice del array esta
  if(index >-1){
    this.carrito[index].cantidad++;
  }
  else{
    this.carrito.push({
    producto: producto,
    cantidad: cantidad
  });
  }
  
  this.actualizarLocalstorage();
  this.calcularTotal()
}

modificarCantidadProducto(idProducto:number, cantidadACambiar: number){
  const index = this.carrito.findIndex(item => item.producto.id === idProducto);
  if(index > -1) {
    this.carrito[index].cantidad = cantidadACambiar; 
  }
  this.actualizarLocalstorage(); 
  this.calcularTotal();
}

//para agregar/ borrar prod primero lo borro de la lista y despues se actualiza local storage

//dentro del () ponemos un nro q identifique lo que queremos borrar. En el tab3 html hay q poner id adentro del parentesis

eliminarProducto(id:number){
  this.carrito = this.carrito.filter(item =>item.producto.id !== id);
  this.actualizarLocalstorage();
  this.calcularTotal()

}

limpiarCarrito(){
  this.carrito = [];
  this.actualizarLocalstorage();
  this.calcularTotal()
}

actualizarLocalstorage(){
  localStorage.setItem('carrito',JSON.stringify (this.carrito))
}

calcularTotal(){
  this.totalCarrito = 0;
  this.carrito.forEach(item => {
    this.totalCarrito = this.totalCarrito + item.producto.precio * item.cantidad;
  })
}

//el signo de pregunta indica que va a haber propiedades
  // `` son backticks que sirve para poner variables adentro de un string y evitar muchos saltos de linea

  generarMensaje(){
    const primeraParte = "https://wa.me/+54341123456?text="
    let parteProductos = ''
    this.carrito.forEach(itemCarrito => {
      parteProductos += `*${itemCarrito.producto.nombre} - ${itemCarrito.cantidad}`
    });
    const ultimaParte = `Se realizo el siguiente pedido:
    Productos: 
    ${parteProductos}
    Total: $${this.totalCarrito}
    Dirección de envio: DIRECCION DE EJEMPLO`;
    return encodeURI(primeraParte+ultimaParte);
  }



}

//con el corchete se accede a los elementos de un array, estos no tiene nombre, propiedad, etc