import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service'

@Injectable({
  providedIn: 'root'
})
export class DonorRegistrationService {

  constructor(private httpClient: HttpClient,
    public authenticationService: AuthenticationService) { }


  registration(firstName, lastName, email, city, bloodType) {
    this.authenticationService.isWait = true;
    return this.httpClient.post<any>('http://localhost:8080/donorRegistration', { firstName, lastName, email, city, bloodType }).pipe(
      map(
        userData => {
          this.authenticationService.isWait = false;
          return userData;
        }
      )

    );
  }
}
