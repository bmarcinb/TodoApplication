import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { fromEventPattern } from 'rxjs';

export class HelloWorldBean{
  constructor(public message:string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
   return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log("Execute Hello World Bean Service");
  }
  executeHelloWorldServiceWithPath(name){
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let headers = new HttpHeaders({
      Authorization:basicAuthHeaderString
    })

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`, {headers});

  }

  createBasicAuthenticationHttpHeader(){
    let username = 'Marcin'
    let password = 'dummy'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username +':'+ password);
    return basicAuthHeaderString;


  }

}
