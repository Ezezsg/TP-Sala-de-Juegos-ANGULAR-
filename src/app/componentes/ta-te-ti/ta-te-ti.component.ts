import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-ta-te-ti',
  templateUrl: './ta-te-ti.component.html',
  styleUrls: ['./ta-te-ti.component.css']
})
export class TaTeTiComponent implements OnInit {

  mensaje:string;
  comenzar:boolean = false;
  casilleros: any;

  constructor(
    private juegoService: JuegoServiceService
  ) { 
    this.casilleros = new Array(9);
  }

  ngOnInit(): void {
  }

  jugar(numeroCasillero:number){
    if(!this.casilleros[numeroCasillero]){
      this.casilleros[numeroCasillero] = "x";
      if(this.gano("x")){
        this.mensaje = "GANO";
        this.reiniciar();
      }
      else if(this.gano("o")){
        this.mensaje = "PERDIO"!;
        this.reiniciar();
      }
      else if(this.empate()){
        this.mensaje = "EMPATE";
        this.reiniciar();
      }
      else{
        setTimeout(() => this.juegaMaquina(), 500);
      }
    }
  }

  reiniciar(){
    setTimeout(() => {
      this.casilleros = new Array(9);
    //   this.juegoService.setResult({
    //     juego: 'TaTeTi',
    //     puntaje: this.mensaje 
    //   })
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(err => {
    //     console.log('Error ->', err);
    //   });
       this.mensaje = "";
     }, 1000
    );
  }

  empate():boolean{
    let retorno = true;
    for (let index = 0; index < this.casilleros.length; index++) {
      if(!this.casilleros[index]){
        retorno = false;
        break;
      }
    }
    return retorno;
  }

  juegaMaquina(){
    let disponible = false;
    let numCasillero;
    while(!disponible){
      numCasillero = Math.floor(Math.random() * 9 + 0);
      if(!this.casilleros[numCasillero]){
        disponible = true;
      }
    }
    this.casilleros[numCasillero] = "o";
  } 

  gano(letra:string):boolean {

    if(this.casilleros[0] == letra && this.casilleros[1] == letra && this.casilleros[2] == letra) {
      return true;
    }
    if(this.casilleros[3] == letra && this.casilleros[4] == letra && this.casilleros[5] == letra) {
      return true;
    }
    if(this.casilleros[6] == letra && this.casilleros[7] == letra && this.casilleros[8] == letra) {
      return true;
    }

    if(this.casilleros[0] == letra && this.casilleros[3] == letra && this.casilleros[6] == letra) {
      return true;
    }
    if(this.casilleros[1] == letra && this.casilleros[4] == letra && this.casilleros[7] == letra) {
      return true;
    }
    if(this.casilleros[2] == letra && this.casilleros[5] == letra && this.casilleros[8] == letra) {
      return true;
    }

    if(this.casilleros[0] == letra && this.casilleros[4] == letra && this.casilleros[8] == letra) {
      return true;
    }
    if(this.casilleros[2] == letra && this.casilleros[4] == letra && this.casilleros[6] == letra) {
      return true;
    }
    return false;
  }
}