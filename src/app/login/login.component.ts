import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username ='Marcin'
  password = ''
  errorMessage = "Invalid Cridentials"
  invalidLogin = false



  constructor(private router: Router,
 
  private harcodedAuthenticationService: HardcodedAuthenticationService   ) { }

  ngOnInit() {
  }

  handleLogin(){
  if(this.harcodedAuthenticationService.authenticate(this.username, this.password)) {
    this.router.navigate(['welcome', this.username])
    this.invalidLogin = false
    
//send to welcome
  }else{
   this.invalidLogin = true
  }


  }


}
