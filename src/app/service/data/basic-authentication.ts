import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username, password){
   // console.log('before '+this.isUserLoggedIn());
    if(username === "Marcin" && password === 'dummy'){
      sessionStorage.setItem('authenticaterUser', username);
     // console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
    }


  isUserLoggedIn(){
  let user = sessionStorage.getItem('authenticaterUser')
  return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }

   executeAuthenticationService(username, password){
 
    let basicAuthHeaderString = 'Basic ' + window.btoa(username +':'+ password);
    return basicAuthHeaderString;
 
     let headers = new HttpHeaders({
       Authorization:basicAuthHeaderString
     })
 
     return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {headers});
 
   }
 

  }
  export class AuthenticationBean{

    constructor(public message:string) {}
   }

