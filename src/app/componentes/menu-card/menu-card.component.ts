import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  juegos = [
    // { 
    //   Ruta:"Anagrama",
    //   Nombre:"Anagrama", 
    //   Descripcion:"Crea una palabra a partir de la reordenación de las letras de otra palabra.",
    //   Imagen: "./assets/imagenes/anagrama.jpg"
    // },
    { 
      Ruta:"PiedraPapelTijera",
      Nombre:"Piedra Papel o Tijera", 
      Descripcion:'Selecciona entre, "'+"piedra"+'", "'+"papel"+'" o "'+"tijera"+'", la piedra aplasta a la tijera, la tijera corta el papel y el papel envuelve a la piedra.',
      Imagen: "./assets/imagenes/ppt.jpg"
    },
    { 
      Ruta:"TaTeTi",
      Nombre:"TaTeTi", 
      Descripcion:"Debes colocar un símbolo una vez por turno y no debe ser sobre una casilla ya jugada. Se debe conseguir realizar una línea recta o diagonal por símbolo. Al marcar una casilla, aunque sea la más mínima marca, deberá poner símbolo de la siguiente jugada en esa casilla. Se puede realizar movimientos horizontales, verticales y diagonales.",
      Imagen: "./assets/imagenes/tateti.jpg"
    },
    { 
      Ruta:"Memotest",
      Nombre:"Memotest", 
      Descripcion:"En un tablero de fichas repetidas y mezcladas que están boca abajo formando un cuadro, se deberá ir dando vuelta primero una ficha, luego otra tratando que sean pares, hasta que se terminen las fichas.",
      Imagen: "./assets/imagenes/memotest.png"
    },
    // { 
    //   Ruta:"Adivina",
    //   Nombre:"Adivina el Número", 
    //   Descripcion:"Tienes que utilizar tu lógica para adivinar un número secreto.",
    //   Imagen: "./assets/imagenes/adivina.png"
    // },
    { 
      Ruta:"Agilidad",
      Nombre:"Agilidad Aritmética", 
      Descripcion:"Se presenta una cuenta aritmética y tienes un tiempo para contestar.",
      Imagen: "./assets/imagenes/aritmetica.jpg"
    },
    // { 
    //   Ruta:"Serpiente",
    //   Nombre:"La Serpiente", 
    //   Descripcion:"Controlas a una serpiente que se desplaza moviendo solo su cabeza con las 4 direcciones del teclado, deberas recojer los objetos haciendo que ésta aumente de velocidad. Evita los bordes del mapa.",
    //   Imagen: "./assets/imagenes/serpiente.png"
    // }
  ];

  constructor(private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
  }
  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'Anagrama':
          this.router.navigate(['/Juegos/Anagrama']);
        break;
      case 'PiedraPapelTijera':
          this.router.navigate(['/Juegos/PiedraPapelTijera']);
        break;
      case 'TaTeTi':
          this.router.navigate(['/Juegos/TaTeTi']);
        break;
      case 'Memotest':
          this.router.navigate(['/Juegos/Memotest']);
        break;
      case 'Serpiente':
          this.router.navigate(['/Juegos/Serpiente']);
        break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
      case 'AnagramaMasListado':
          this.router.navigate(['/Juegos/AnagramaMasListado']);
        break;
      case 'PiedraPapelTijeraMasListado':
          this.router.navigate(['/Juegos/PiedraPapelTijeraMasListado']);
        break;
      case 'TaTeTiMasListado':
          this.router.navigate(['/Juegos/TaTeTiMasListado']);
        break;
      case 'MemotestMasListado':
          this.router.navigate(['/Juegos/MemotestMasListado']);
        break;
      case 'SerpienteMasListado':
          this.router.navigate(['/Juegos/SerpienteMasListado']);
        break;
    }
  }
}
