import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service'


@Injectable({
  providedIn: 'root'
})
export class PatientRegistrationService {

  constructor(private httpClient: HttpClient,
    public authenticationService: AuthenticationService) { }

  togetherRegistration(firstNamePatient, lastNamePatient, emailPatient, cityPatient, bloodTypePatient,
    firstNameDonor, lastNameDonor, emailDonor, cityDonor, bloodTypeDonor) {
    this.authenticationService.isWait = true;
    return this.httpClient.post<any>('http://localhost:8080/patientTogetherRegistration', {
      firstNamePatient, lastNamePatient, emailPatient, cityPatient, bloodTypePatient,
      firstNameDonor, lastNameDonor, emailDonor, cityDonor, bloodTypeDonor
    }).pipe(
      map(
        userData => {
          this.authenticationService.isWait = false;
          return userData;
        }
      )

    );
  }

  patientRegistration(firstName, lastName, email, city, bloodType) {
    this.authenticationService.isWait = true;
    return this.httpClient.post<any>('http://localhost:8080/patientRegistration', {
      firstName, lastName, email, city, bloodType
    }).pipe(
      map(
        userData => {
          this.authenticationService.isWait = false;
          return userData;
        }
      )
    );
  }
}
