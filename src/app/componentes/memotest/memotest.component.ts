import { Component, OnInit } from '@angular/core';
import { ServicoJuegosService } from '../../servicios/servico-juegos.service';
import { AuthenticateService } from '../../servicios/authentication.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {
	
	nombreDelJuegoChat:string = "mt"
	userEmail: string;
	public deshabilitar:boolean[] = [];
  	public comenzo:boolean;
  	public mensaje:string;
  	public fotos: string[] = [];
  	public banderas: string[] = [];
  	public indexAux: any;
  	public reiniciar:boolean;
  	public fallos:number;
	public puntajeFinal: number = 140;

	constructor(
    private js: ServicoJuegosService,
    private user: AuthenticateService,
    private http: HttpClient
  ) { }
	
	ngOnInit(): void {
    this.user.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.userEmail = res.email;
      }
    }, )
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe((data)=>{

      for(let i=0;i<=5;i++)
      {
        let j;
        do{
          j = Math.floor(Math.random() * 250);
        }while(this.banderas.includes(data[j].flag));

        this.banderas.push(data[j].flag);
      }
      this.banderas.push(...this.banderas);

      console.log(this.banderas);
    });
	this.comenzarJuego();	
	}

  	comenzarJuego(){
    	this.comenzo = false;
    	this.reiniciar = false;
    	this.deshabilitar = [];
    	this.fallos = 0;
    	const listaIndex:number[] = new Array();
    	 for (let i = 0; i < this.banderas.length; i++) {
      	 	const j = Math.floor(Math.random() * this.banderas.length+0);
      	 	if((listaIndex.length == 0 || listaIndex.indexOf(j) == -1) && i != j){
         		const temp = this.banderas[j];
         		this.banderas[j] = this.banderas[i];
         		this.banderas[i] = temp;
      	 	}
      	 	else{
         		i --;
      		}
    	 }
    	this.fotos = this.banderas;
  	}

  	juega(index:number){
    	this.fotos[index] = this.banderas[index];
    	this.deshabilitar[index] = true;
    		if(this.indexAux != null){
      			if(this.indexAux != index){
        			if(this.fotos[this.indexAux] == this.fotos[index]){
          				this.mensaje = "¡BIEEN!";
          				this.indexAux = null;
        			}
        			else{
          				setTimeout(() => this.eligioMal(index), 100);
        			}
      			}
    		}
    		else{
      			this.indexAux = index;
    		}
    	if(this.verificarGano()){
      		this.mensaje = "GANO CON " + this.fallos + " FALLOS";
      		this.js.setResult({
        	juego: 'Memotest',
        	puntaje: this.puntajeFinal - this.fallos
      		})
      		.then(result => {
        	console.log(result);
      		})
      		.catch(err => {
        	console.log('Error ->', err);
      		});
			
      		this.reiniciar = true;
    	}
 	}

  	verificarGano():boolean{
    	let retorno = this.fotos.length == 12;
    	for (let i = 0; i < this.fotos.length; i++) {
      		if(!this.fotos[i]){
        		retorno = false;
        		break;
      		}
    	}
    	return retorno;
  	}


  	eligioMal(index:number){
    	this.fallos ++;
    	this.mensaje = "Mal - Fallaste "+ this.fallos +" vez";
    	this.fotos[this.indexAux] = null;
    	this.fotos[index] = null;
    	this.deshabilitar[this.indexAux] = false;
    	this.deshabilitar[index] = false;
    	this.indexAux = null;
  	}

  	empezar(){
    	this.fotos = [];
    	this.comenzo = true;
  	}

  	onReiniciar(){ 
		this.mensaje= "";  
    	this.comenzarJuego();
  	}

	
}
