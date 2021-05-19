import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticateService } from '../servicios/authentication.service';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicioEncuestaService {

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
    return this.afs.collection('encuestas').add({
      usuario: this.userEmail,
      nombre: result.nombre,
      apellido: result.apellido,
      edad: result.edad,
      telefono: result.telefono,
      texto: result.texto,
      juego: result.juego,
      calificacion: result.calificacion,
      terminos: result.terminos 
    });
  }
  
  public get(entidad:string) {
    return this.afs.collection(entidad).valueChanges();
  }
}
