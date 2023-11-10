import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-contador-cantidad',
  templateUrl: './contador-cantidad.component.html',
  styleUrls: ['./contador-cantidad.component.scss'],
  standalone: true,
  //por ser standalone (no depende de ningun modulo) hay que importar las cosas de abajo
  imports: [CommonModule, IonicModule]
  //pone ionicmodule para poder usar componentes de ionic
})
export class ContadorCantidadComponent  implements OnInit {



  constructor() { }

  ngOnInit() {
    this.cantidad = this.cantidadInicial;
  }

  cantidad= 1;
  @Output() cantidadCambiada = new EventEmitter<number>(); 
  //comunicacion padre a hijo
  @Input() cantidadInicial:number = 1;
  //si recibo una cantidad inicial, al iniciar el componente pongo que la cantidad que me muestra es la inicial. Si no recibi ninguna la cantidad va a ser 1

  sumar(){
    this.cantidad = this.cantidad+1;
    this.cantidadCambiada.emit(this.cantidad);

  }

  restar(){
    if(this.cantidad > 1){
      this.cantidad = this.cantidad-1;
    }
  }

}

//como hicimos el contador de cantidad tenemos que agregar en el carrito service que AgregarProducto tambien reciba una cantidad y no solo un producto
//para conectar el contador hay que hacer una COMUNICACION HIJO Y PADRE.Esto seria lo mismo que GENERAR UN NUEVO TIPO DE EVENTO para reaccionar, como hace un boton de click. Podemos crear nuestros propios elementos para reaccionar a cosas
//hijo: todo lo que esta adentro de algo. padre: todo lo que esta arriba de algo
//cuando hacemos click en el contador reaccionamos y cambiamos la cantidad