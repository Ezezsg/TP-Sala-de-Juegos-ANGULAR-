import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticateService } from '../../servicios/authentication.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(
  	private authService: AuthenticateService,
  	private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.router.navigate(['']);
      })
      .catch(error => {
        console.log(error);
      })
  }	 

}
