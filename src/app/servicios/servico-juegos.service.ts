import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Resultados } from "../clases/resultados";
import { JugadoresService } from "./jugadores.service"
import { Jugador } from "../clases/jugador";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ServicoJuegosService {

  private url = environment.urlPaises;
  private resultadosCollection: AngularFirestoreCollection<Resultados>;
  resultados: Observable<Resultados[]>;

  constructor(
    private firestore: AngularFirestore, 
    private jugadorSrv: JugadoresService,
    private http: HttpClient
  ) {
    this.resultadosCollection = firestore.collection<Resultados>('resultados');

    this.resultados = this.resultadosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Resultados;
        data.id = a.payload.doc.id;
        return { ...data }
      }))
    );
   }

  // Paises
  
  public obtenerPaises(){
    return this.http.get(this.url);
  }

  getResultados() {
    return this.firestore.collection("resultados").snapshotChanges();
  }

  createResultado(res: Resultados) {
    return this.firestore.collection('resultados').add(res).then( ref =>{
        this.jugadorSrv.actualizarGano(res.usuario);
    });
  }

  updateResultado(res: Resultados) {
    this.firestore.collection("resultados").doc(res.id).update(res);
  }

  deleteResultado(resId: Resultados) {
    this.firestore.collection("resultados").doc(resId.id).delete();
  }
}
