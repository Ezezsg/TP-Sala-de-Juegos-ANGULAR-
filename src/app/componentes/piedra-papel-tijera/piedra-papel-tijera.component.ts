import { Component, OnInit } from '@angular/core';
import { ServicoJuegosService } from '../../servicios/servico-juegos.service';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  nombreDelJuegoChat:string = "ppt"
  jugadaUsuario:string=null;
  jugadaSistema:string;
  mensaje:string;
  mensajeFinal:string;

  aux_jugadaSistema;

  puntos:number;

  empieza:boolean = false;
  resultado:boolean = false;

  correcto:boolean = false;
  incorrecto:boolean = false;
  public puntajeFinal: number = 100;

  constructor(
    private js: ServicoJuegosService
  ) {
  	this.prepararJuego();
  }

  ngOnInit() {

  }

  prepararJuego()
  {
    this.puntos = 0;
    this.mensaje="Haga click en la alguno de los botones (en la piedra, en el papel o en la tijera) para realizar su jugada.";
    this.empieza=true;
    this.jugadaUsuario=null;
    this.generarJugada();
  }



  generarJugada()
  {
    //this.aux_jugadaSistema = 3;
    this.aux_jugadaSistema = Math.floor(Math.random() * ((3+1) - 1)+1);
    console.log(this.aux_jugadaSistema);    

    switch (this.aux_jugadaSistema)
    {
      case 1:
        this.jugadaSistema = "Piedra";        
        break;

      case 2:        
        this.jugadaSistema = "Papel";
        break;

      case 3:        
        this.jugadaSistema = "Tijera";
        break;
    }

    console.log(this.jugadaSistema);


  }



  verificarJugada()
  {    
    if(this.empieza == true)
    {
    if(this.jugadaUsuario != this.jugadaSistema)
    {

      if(this.jugadaUsuario == "Piedra")
      {
        if (this.jugadaSistema == "Tijera")
        {
          this.resultado = true;
          
          this.mensaje = "Usted ha ganado";
          this.puntos += 10;
        }
        else
        {      
          this.resultado = false;
          this.puntos = -10;
          this.mensaje = "Usted perdio";
        }
      }


      if(this.jugadaUsuario == "Tijera")
      {
        if (this.jugadaSistema == "Papel")
        {
          this.resultado = true;
          
          this.mensaje = "Usted ha ganado";
          this.puntos += 10;
        }
        else
        {      
          this.resultado = false;
          this.puntos = -10;
          this.mensaje = "Usted perdio";
        }
      }
      

      if(this.jugadaUsuario == "Papel")
      {
        if (this.jugadaSistema == "Piedra")
        {
          this.resultado = true;
          
          this.mensaje = "Usted ha ganado";
          this.puntos += 10;
        }
        else
        {      
          this.resultado = false;
          this.puntos = -10;
          this.mensaje = "Usted perdio";
        }
      }      
    }
    else
    {
      this.resultado = false;
      this.mensaje = "Empate";
      this.puntos += 5;
    }


    
    // this.mensaje += ". Sumo "+ this.puntos +"Pts., haga click en 'Intentar otra vez' e intente con otra jugada.";
    this.mensaje += " haga click en 'Intentar otra vez' e intente con otra jugada.";

    switch (this.jugadaSistema)
    {
      case "Piedra":
        document.getElementById("BtnPiedra").setAttribute("class", "btn btn-danger active");       
        break;

      case "Papel":        
        document.getElementById("BtnPapel").setAttribute("class", "btn btn-danger active");  
        break;

      case "Tijera":        
        document.getElementById("BtnTijera").setAttribute("class", "btn btn-danger active");  
        break;
    }
    
    
    
    this.finDelJuego();
    }
  }



QueHay(val)
{
  if (this.empieza == true)
  {
    this.jugadaUsuario = val.target.alt;
    console.log(this.jugadaUsuario); 

    this.desmarcarBotones();
    switch (this.jugadaUsuario)
    {
      case "Piedra":
        document.getElementById("BtnPiedra_user").setAttribute("class", "btn btn-primary active");   
        break;

      case "Papel":
        document.getElementById("BtnPapel_user").setAttribute("class", "btn btn-primary active");   
        break;

      case "Tijera":    
        document.getElementById("BtnTijera_user").setAttribute("class", "btn btn-primary active"); 
        break;
    }
  }

  this.verificarJugada();
}



desmarcarBotones()
{
  document.getElementById("BtnPiedra_user").setAttribute("class", "btn btn-outline-primary");  
  document.getElementById("BtnPapel_user").setAttribute("class", "btn btn-outline-primary");
  document.getElementById("BtnTijera_user").setAttribute("class", "btn btn-outline-primary"); 

  document.getElementById("BtnPiedra").setAttribute("class", "btn btn-outline-danger");  
  document.getElementById("BtnPapel").setAttribute("class", "btn btn-outline-danger");
  document.getElementById("BtnTijera").setAttribute("class", "btn btn-outline-danger");
}


finDelJuego()
{
  this.empieza = false;
  this.js.setResult({
    juego: 'Piedra Papel o Tijera',
    puntaje: this.puntajeFinal + this.puntos
    })
    .then(result => {
    console.log(result);
    })
    .catch(err => {
    console.log('Error ->', err);
    });
  
}


reiniciarJuego()
{
  this.prepararJuego();
  this.desmarcarBotones();
}

}
