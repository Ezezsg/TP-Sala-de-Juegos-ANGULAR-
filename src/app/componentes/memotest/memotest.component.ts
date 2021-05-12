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
	
	userEmail: string;
	banderas: any;

	constructor(
    private js: ServicoJuegosService,
    private user: AuthenticateService,
    private http: HttpClient
  ) { }
	ngOnDestroy(): void {
		throw new Error('Method not implemented.');
	}

	ngOnInit(): void {
    this.user.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.userEmail = res.email;
      }
    }, )
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe((data)=>{

      for(let i=0;i<=7;i++)
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
		
	}

	
}
