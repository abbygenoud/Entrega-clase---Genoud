import { Component, OnInit } from '@angular/core';
import { Categoria } from '../core/interfaces/categorias.ts/interfaces/categorias';
import { CATEGORIAS } from '../core/interfaces/categorias.ts/constants/categorias';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  ngOnInit(): void {
    //this.categorias.push({
      //nombre: '',
      //id: 0,
      //imgUrl: ''
    //}) podemos borrarlo si queremos
  }

  categorias:Categoria[] = CATEGORIAS
}


//{
  //creamos una propiedad, se pone solo la palabra
//  categorias = ['Hamburguesas','Pizzas','Postres','Bebidas']

//}
