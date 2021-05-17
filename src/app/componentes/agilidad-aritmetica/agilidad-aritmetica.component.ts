import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
   
  nombreDelJuegoChat:string = "aa"
  numUno:number=0;
  operador:string="?";
  numDos:number=0;
  visornumUno:number;
  visoroperador:string;
  visornumDos:number;


  aux_operador:number;

  resultadoUsuario:number;
  resultadoSistema:number;
  correcto:boolean = false;
  incorrecto:boolean = false;
  public bandera:boolean = false; 

  ocultarVerificar: boolean=false;
  Tiempo: number;
  repetidor:any;

  intentos_Usuario:number = 0;
  intentos_Sistema:number = 5;
  aciertosPositivos:number = 0;

  puntos:number; 

  ngOnInit() {
    
  }
   constructor() {
       
  }

  prepararJuego()
  {
    this.resetVariables();
    this.puntos = 0;
    this.bandera = true;
    this.generarCalculo();
    
    setInterval(() => {
      this.verificar();
    }, 20000);

  }

  generarCalculo()
  {
    this.aux_operador = Math.floor(Math.random() * ((4+1) - 1)+1);

    switch (this.aux_operador)
    {
          case 1:
          this.operador = "X";
          this.numUno = Math.floor(Math.random() * ((100+1) - 1)+1);
          this.numDos = Math.floor(Math.random() * ((10+1) - 1)+1);
            break;

          case 2:
          this.operador = "-";
          this.numUno = Math.floor(Math.random() * ((100+1) - 1)+1);
          this.numDos = Math.floor(Math.random() * ((100+1) - 1)+1);
            break;

          case 3:
          this.operador = "+";
          this.numUno = Math.floor(Math.random() * ((100+1) - 1)+1);
          this.numDos = Math.floor(Math.random() * ((100+1) - 1)+1);
            break;

          case 4:
          this.operador = ":";
          var bandera = true;

          while (bandera || (this.numUno % this.numDos) != 0 )
          { 
            bandera = false;     
            this.numUno = Math.floor(Math.random() * ((100+1) - 1)+1);
            this.numDos = Math.floor(Math.random() * ((10+1) - 1)+1);
          }
            break;
        }

        this.visornumUno = this.numUno;
        this.visornumDos = this.numDos;
        this.visoroperador = this.operador;

        switch (this.operador)
        {
          case "X":
            this.resultadoSistema = this.numUno * this.numDos;
            break;

          case "-":
            this.resultadoSistema = this.numUno - this.numDos;
            break;

          case "+":
            this.resultadoSistema = this.numUno + this.numDos;
            break;

          case ":":
            this.resultadoSistema = this.numUno / this.numDos;
            break;
    }


  
  }

  verificar()
  {
      
      this.bandera = false;
      if (this.resultadoUsuario == this.resultadoSistema){
        this.puntos = 10;
        //guardo
        this.correcto = true;
      }
      else{
        //guardo
        this.incorrecto = true;
      }
    
    
  }  

  resetVariables()
  {
    this.resultadoUsuario = null;
    this.resultadoSistema = null;
    
    this.numUno = 0;
    this.operador = "?";
    this.numDos = 0; 

    this.correcto = false;
    this.incorrecto = false;

  }

}
