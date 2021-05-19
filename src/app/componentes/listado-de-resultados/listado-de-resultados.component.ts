import { Component, OnInit } from '@angular/core';
import { ServicoJuegosService } from '../../servicios/servico-juegos.service';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
 
  listadoDeResultados: any;

  constructor(
    private js: ServicoJuegosService
    ) {
   }

  ngOnInit() {
    this.js.get('resultados').subscribe(result =>{
      this.listadoDeResultados = result;
    })
  }

}
