import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';

import { AuthenticateService } from '../../servicios/authentication.service';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input()queChat: string;  
  userEmail: string ='';
  userId: string;
  message:string='';
  messages: any[];
  date: Date;
  fecha: any;

  constructor(
  	private router: Router, 
    private authService: AuthenticateService, 
    private af: AngularFireDatabase
  ) 
  { 
  	
  }

  ngOnInit() {
  	
    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        
        this.userEmail = res.email;
        this.userId = res.uid;
      } else {
        this.router.navigate(['']);
      }
    }, err => {
      console.log('err', err);
    })
    this.af.list('/'+this.queChat+'').valueChanges().subscribe(data=>
        {
          this.messages=data;
          
          //data.map(elem=>{
            // this.messages.push(elem);
         // })
        });
  }

  sendMessage()
  {
    this.date = new Date();
    this.fecha = +" "+this.date.getDate()+"/"+(this.date.getMonth()+1)+"/"+this.date.getFullYear()+" "+this.date.getHours()+":"+this.date.getMinutes();
    this.af.list('/'+this.queChat+'').push(
      {
        username : this.userEmail,
        message: this.message,
        fecha: this.fecha

      }).then( ()=>{

      }).catch( ()=>{

      });
      this.message = "";
  }

}
