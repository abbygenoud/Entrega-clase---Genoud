import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/interfaces/categorias.ts/constants/categorias';
import { Producto } from 'src/app/core/interfaces/categorias.ts/interfaces/productos';
import { CarritoService } from 'src/app/core/services/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  router = inject(Router);

 //aca abajo lo mismo que en categoria.page.ts
  constructor(private activatedRoute: ActivatedRoute,
    private carritoService: CarritoService) {
      activatedRoute.params.subscribe(params => {
        console.log(params)
        CATEGORIAS.forEach(categoria => {
          const productoEncontrado = categoria.productos.find(producto => producto.id == params['id']);

          if(productoEncontrado){
            this.producto = productoEncontrado
          }
        })
     })
  }
 
  //agarramos categorias, empezamos a ver si encontramos alguna que coincida con el id. Tenemos que ver que el contenido de la variable producto sea correcto, 
  // cuando encontramos el producto ponemos this.producto = rta
  ngOnInit() {
  }

  

  //creo una variable producto de tipo producto
  producto:Producto = {
    id: 0,
    nombre: '',
    precio: 0,
    ingredientes: [],
    imagen:''
  }

  cantidad= 1;

  onAgregarAlCarritoClicked(){
    console.log('CLICKEADO')
    this.carritoService.agregarProducto(this.producto,this.cantidad);
    //hay que reaccionar guardar el numero para despues poder mostrarlo
    console.log(this.carritoService.carrito);
    this.router.navigate(['tabs/tab1']);
  }

}  


function ngOnInit(): ((error: any) => void) | null | undefined {
  throw new Error('Function not implemented.');
}

