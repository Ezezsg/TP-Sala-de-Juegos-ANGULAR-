import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticateService } from '../../servicios/authentication.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

 userEmail: string;

 public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  constructor(
  	private authService: AuthenticateService,
  	private router: Router
  ) {  }

  ngOnInit() {
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

}
