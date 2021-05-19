import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioEncuestaService } from '../../servicios/servicio-encuesta.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  public forma!: FormGroup;
  public seGuardo: boolean = false;

  constructor(
    private fb: FormBuilder,
    private es: ServicioEncuestaService
  ) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
  		'nombre': ['', Validators.required],
  		'apellido': ['', Validators.required],
  		'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
  		'telefono': ['',Validators.required],
  		'texto': ['', Validators.required],
  		'juego': ['', Validators.required],
      'calificacion': ['', Validators.required],
      'terminos': ['', Validators.required],
      
  	})
  }

  aceptar(){
  	// console.log(this.forma.getRawValue()); devuelvo todo
  	// console.log(this.forma.get('nombre').value); no funciona por el ! de la inicializacion de la variable
  	//console.log(this.forma.controls['nombre'].value); devuelvo el nombre
    this.es.setResult({
      nombre: this.forma.controls['nombre'].value,
      apellido: this.forma.controls['apellido'].value,
      edad: this.forma.controls['edad'].value,
      telefono: this.forma.controls['telefono'].value,
      texto: this.forma.controls['texto'].value,
      juego: this.forma.controls['juego'].value,
      calificacion: this.forma.controls['calificacion'].value,
      terminos: this.forma.controls['terminos'].value
      })
      .then(result => {
      console.log(result);
      })
      .catch(err => {
      console.log('Error ->', err);
      });
    this.seGuardo = true;
  }

}
