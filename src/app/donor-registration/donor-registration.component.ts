import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { Router, RouteConfigLoadEnd } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DonorRegistrationService } from '../services/donor-registration.service';

@Component({
  selector: 'app-donor-registration',
  templateUrl: './donor-registration.component.html',
  styleUrls: ['./donor-registration.component.css']
})
export class DonorRegistrationComponent implements OnInit {

  lastNameText = ''
  firstNameText = ''
  emailText = ''
  cityText = ''
  grupaSangeValoare = ''

  constructor(public registrationService: DonorRegistrationService,
    private router: Router,
    public loginValidationBar: MatSnackBar,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  public donorRegistation() {
    (this.registrationService.registration(this.firstNameText, this.lastNameText, this.emailText, this.cityText, this.grupaSangeValoare).subscribe(
      data => {
        this.router.navigateByUrl('/#page-top').then(() => {
          this.loginValidationBar.open("V-ati inscris cu succes!", "OK", {
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

@Component({
  selector: 'family-member',
  templateUrl: 'family-member.component.html',
  styleUrls: ['./donor-registration.component.css']
})
export class FamilyMemberComponent {

  lastNameText = ''
  firstNameText = ''
  emailText = ''
  cityText = ''
  grupaSangeValoare = ''

  constructor(public registrationService: DonorRegistrationService,
    private router: Router,
    public loginValidationBar: MatSnackBar,
    private loginservice: AuthenticationService) { }

  public donorRegistation() {
    (this.registrationService.registration(this.firstNameText, this.lastNameText, this.emailText, this.cityText, this.grupaSangeValoare).subscribe(
      data => {
        this.router.navigateByUrl('/#page-top').then(() => {
          this.loginValidationBar.open("V-ati inscris cu succes!", "OK", {
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

@Component({
  selector: 'friend-donor',
  templateUrl: 'friend-donor.component.html',
  styleUrls: ['./donor-registration.component.css']
})
export class FriendDonorComponent {

  lastNameText = ''
  firstNameText = ''
  emailText = ''
  cityText = ''
  grupaSangeValoare = ''

  constructor(public registrationService: DonorRegistrationService,
    private router: Router,
    public loginValidationBar: MatSnackBar,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  public donorRegistation() {
    (this.registrationService.registration(this.firstNameText, this.lastNameText, this.emailText, this.cityText, this.grupaSangeValoare).subscribe(
      data => {
        this.router.navigateByUrl('/#page-top').then(() => {
          this.loginValidationBar.open("V-ati inscris cu succes!", "OK", {
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
