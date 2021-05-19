import { Component, OnInit } from '@angular/core';
import { ServicioEncuestaService } from '../../servicios/servicio-encuesta.service';

@Component({
  selector: 'app-resultado-encuesta',
  templateUrl: './resultado-encuesta.component.html',
  styleUrls: ['./resultado-encuesta.component.css']
})
export class ResultadoEncuestaComponent implements OnInit {

  listadoDeResultados: any;

  constructor(
    private es: ServicioEncuestaService
  ) { }

  ngOnInit(): void {
    this.es.get('encuestas').subscribe(result =>{
      this.listadoDeResultados = result;
    })
  }

}
