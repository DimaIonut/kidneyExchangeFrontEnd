import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { Router, RouteConfigLoadEnd } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  usernameText = '';
  passwordText = '';
  invalidLogin = false
  usernameRegister = '';
  emailRegister = '';
  passwordRegister = '';


  constructor(private router: Router,
    private loginservice: AuthenticationService, public loginValidationBar: MatSnackBar) { }

  myControl = new FormControl('', Validators.required);
  options: string[] = ['Primitor', 'Donator'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  checkLogin() {
    (this.loginservice.authenticate(this.usernameText, this.passwordText).subscribe(
      data => {
        this.router.navigateByUrl('/#page-top').then(() => {
          this.loginValidationBar.open("V-ati logat cu succes!", "OK", {
            panelClass: ['green-snackbar']
          });
          window.scrollTo(0, 0);
        });
        this.invalidLogin = false;
        console.log("Login is " + !this.invalidLogin);
      },
      error => {
        this.loginservice.isWait = false;
        this.router.navigateByUrl('/#page-top').then(() => {
          this.loginValidationBar.open("Logarea nu s-a efectuat cu succes!", "OK", {
            panelClass: ['green-snackbar']
          });
          window.scrollTo(0, 0);
        });
        this.invalidLogin = true;
        console.log('Invalid username or password... :( ');

      }
    )
    );

  }

  checkRegistration() {
    (this.loginservice.registration(this.usernameRegister, this.emailRegister, this.passwordRegister, this.myControl.value.toLowerCase()).subscribe(
      data => {
        this.router.navigateByUrl('/#page-top').then(() => {
          this.loginValidationBar.open("V-ati inregistrat cu succes!", "OK", {
            panelClass: ['green-snackbar']
          });
          window.scrollTo(0, 0);
        });
      },
      error => {
        this.loginservice.isWait = false;
        this.router.navigateByUrl('/#page-top').then(() => {
          this.loginValidationBar.open("Din pacate inregistrarea nu a avut loc! Incercati cu alt nume de utilizator", "OK", {
            panelClass: ['green-snackbar']
          });
          window.scrollTo(0, 0);
        });
      }
    )
    );

  }

}


