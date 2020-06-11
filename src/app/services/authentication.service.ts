import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User {
  constructor(public status: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  isWait: boolean = false;


  authenticate(username, password) {
    this.isWait = true;
    return this.httpClient.post<any>('http://localhost:8080/authenticate', { username, password }).pipe(
      map(
        userData => {
          let tokenStr = 'Kidney ' + userData.token;
          if (tokenStr != null) {
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('token', tokenStr);
          }
          this.isWait = false;
          return userData;
        }
      )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    let token = sessionStorage.getItem('token')
    console.log(!(user === null))
    return !(user === null || token === null)
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
  }

  getUsername() {
    return sessionStorage.getItem('username');
  }
}


