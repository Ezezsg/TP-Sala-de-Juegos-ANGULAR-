import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthenticateService } from '../servicios/authentication.service';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicoJuegosService {

  userEmail: string;

  constructor(
    private authService: AuthenticateService,
    private router: Router,
    private afs: AngularFirestore,
  ) 
  {
    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.userEmail = res.email;
      } else {
        this.router.navigate(['']);
      }
    }, err => {
      console.log('err', err);
    })
  }

  public setResult(result:any){
    return this.afs.collection('resultados').add({
      usuario: this.userEmail,
      juego: result.juego,
      puntaje: result.puntaje,
      fecha: Date.now()
    });
  }

  public get(entidad:string) {
    return this.afs.collection(entidad).valueChanges();
  }

  
}
