import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  palabra_Usuario:string="";
  palabra_Sistema:string="";
  palabra_Mezclada:string="";
  mensaje:string;
  mensajeFinal:string;

  intentos_Usuario:number=0;
  intentos_Sistema:number=5;
  aciertosPositivos:number=0;

  puntos:number;

  empieza:boolean = false;
  resultado:boolean = false;

  correcto:boolean = false;
  incorrecto:boolean = false;
	
  private ListaDePalabras:Array<string> = [
    "perro",
    "persona",
    "computadora",
    "guitarra",
    "gobierno",
    "liberalismo",
    "sol",
    "luna",
    "libre",
    "mercado",
    "música",
    "tierra",
    "estructura",
    "polimorfismo",
    "herencia"
   ];

  ngOnInit() {
  }

  constructor()  {
      
  }    

  generarJuego()
  { 
    this.puntos = 0;
    this.empieza = true;
    this.intentos_Usuario = 0;
    this.mensajeFinal = "";
    this.obtenerPalabra();
    this.mensaje = "Escriba la palabra correcta y haga click en 'verificar'";    
  } 


  obtenerPalabra()
  {
    if (this.empieza == true)
    {    
      if (this.ListaDePalabras.length > 0)
      {
        this.ListaDePalabras = this.ListaDePalabras.sort(()=>{ return Math.random() - 0.5});
        this.palabra_Sistema = this.ListaDePalabras.pop().toUpperCase();

        this.mezclarLetras();
      }
    }
  }
  
  
    mezclarLetras()
    {
      do
      {
        this.palabra_Mezclada = this.palabra_Sistema.split('').sort(function(){return 0.5 - Math.random() }).join('');
      } while (this.palabra_Mezclada == this.palabra_Sistema)

      console.log(this.palabra_Sistema);
      console.log(this.palabra_Mezclada);
    }



  verificar()
  {
    if (this.intentos_Usuario < this.intentos_Sistema && this.empieza == true)
    {
      this.correcto = false;
      this.incorrecto = false;
      if(this.palabra_Usuario.toUpperCase() == this.palabra_Sistema.toUpperCase())
      {
        this.puntos += 10;
        this.aciertosPositivos++;

        this.correcto = true;
        this.mensaje = "Palabra correcta, pruebe con esta otra palabra...";
      }
      else
      {
        this.incorrecto = true;
        this.mensaje = "Palabra incorrecta, era: "+ this.palabra_Sistema +", pruebe con esta otra palabra...";    
           
      }
      this.intentos_Usuario++; 
      this.palabra_Usuario = "";
      if (this.intentos_Usuario < this.intentos_Sistema)
        this.obtenerPalabra();    


      console.log(this.puntos);


      if (this.intentos_Usuario >= this.intentos_Sistema)
      {this.finDelJuego();} 
    }
  }


  finDelJuego()
  {
    this.empieza = false;
    this.puntos += this.puntos;
    //guardo

    

    if (this.aciertosPositivos == this.intentos_Sistema){
      this.mensajeFinal = "Excelente puntuacion! sumo un total de "+ this.puntos +" Pts. ";
      this.resultado = true;
    }
    else if (this.aciertosPositivos > 0){
      this.mensajeFinal = "Sumo un total de "+ this.puntos +" Pts. ";
      this.resultado = true;
    }
    else{
      this.mensajeFinal = "Usted perdio!!! no pudo acertar ninguna palabra. ";
      this.resultado = false;
    }

    

      this.mensajeFinal += "Haga click en el boton 'Juego nuevo' para volver a comenzar.";

    this.resetVariables();
  }




  resetVariables()
  {
    this.palabra_Usuario = "";
    this.palabra_Sistema = "";
    this.palabra_Mezclada = "";

    this.aciertosPositivos = 0;
    this.correcto = false;
    this.incorrecto = false;
    
  }

}
