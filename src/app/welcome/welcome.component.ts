
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { fromEventPattern } from 'rxjs';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message : string = 'Some Welcome Message'

  welcomeMessageFromService:string
  name = ''

  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
    response => this.handleSuccessfulResponse(response),
    error => this.handleErrorResponse(error)
    );

   // console.log("get welcome message");
  }

  getWelcomeMessageWithParameter(){
      //console.log(this.service.executeHelloWorldBeanService());
      this.service.executeHelloWorldServiceWithPath(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
      );

     // console.log("get welcome message");
    }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
  }

  handleErrorResponse(error){
    //console.log(error)
    //console.log(error.error)
   // console.log(error.error.message)
    this.welcomeMessageFromService = error.error.message
  }

}
