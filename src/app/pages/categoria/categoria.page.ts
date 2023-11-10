import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/interfaces/categorias.ts/constants/categorias';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
    ) {
      activatedRoute.params.subscribe(params => {
        //console.log(params)
        if(params['id']){
          const categoriaEncontrada = CATEGORIAS.find(categoria => categoria.id == params['id']);   
        
          if (categoriaEncontrada){
            this.categoriaActual = categoriaEncontrada;
          }
        
        }
        
        //esto para que me busque el ID y SI LO ENCUENTRA me lo muestra. sea cual sea el id

      })
     }

  ngOnInit() {
  }

  categoriaActual = CATEGORIAS[0];

}
