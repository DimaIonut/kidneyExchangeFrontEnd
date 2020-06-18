import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, RouteConfigLoadEnd } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PatientRegistrationService } from '../services/patient-registration.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {

  lastNameText = ''
  firstNameText = ''
  emailText = ''
  cityText = ''
  grupaSangeValoare = ''

  constructor(private router: Router,
    public loginValidationBar: MatSnackBar,
    private loginservice: AuthenticationService,
    private patientRegistrationService: PatientRegistrationService) { }

  ngOnInit() {
  }

  patientRegistration() {
    this.patientRegistrationService.patientRegistration(this.firstNameText, this.lastNameText, this.emailText, this.cityText, this.grupaSangeValoare).subscribe(
      data => {
        this.router.navigateByUrl('/#page-top').then(() => {
          this.loginValidationBar.open("Pacientul a fost inregistrata cu succes!", "OK", {
            panelClass: ['green-snackbar']
          });
          window.scrollTo(0, 0);
        });
      },
      error => {
        this.loginservice.isWait = false;
        this.router.navigateByUrl('/#page-top').then(() => {
          this.loginValidationBar.open("Din pacate inscrierea nu a avut loc!", "OK", {
            panelClass: ['green-snackbar']
          });
          window.scrollTo(0, 0);
        });
      }
    );
  }

}

@Component({
  selector: 'together-registration',
  templateUrl: './together-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class TogetherRegistrationComponent {

  firstNamePatient = ''
  lastNamePatient = ''
  emailPatient = ''
  cityPatient = ''
  grupaSangeValoarePatient = ''
  firstNameDonor = ''
  lastNameDonor = ''
  emailDonor = ''
  cityDonor = ''
  grupaSangeValoareDonor = ''


  constructor(private router: Router,
    public loginValidationBar: MatSnackBar,
    private loginservice: AuthenticationService,
    private patientRegistration: PatientRegistrationService) { }

  togetherRegistation() {
    (this.patientRegistration.togetherRegistration(this.firstNamePatient, this.lastNamePatient, this.emailPatient, this.cityPatient,
      this.grupaSangeValoarePatient, this.firstNameDonor, this.lastNameDonor, this.emailDonor, this.cityDonor, this.grupaSangeValoareDonor).subscribe(
        data => {
          this.router.navigateByUrl('/#page-top').then(() => {
            this.loginValidationBar.open("Perechea pacient + donator a fost inregistrata cu succes!", "OK", {
              panelClass: ['green-snackbar']
            });
            window.scrollTo(0, 0);
          });
        },
        error => {
          this.loginservice.isWait = false;
          this.router.navigateByUrl('/#page-top').then(() => {
            this.loginValidationBar.open("Din pacate inscrierea nu a avut loc!", "OK", {
              panelClass: ['green-snackbar']
            });
            window.scrollTo(0, 0);
          });
        }
      )
    );
  }

}