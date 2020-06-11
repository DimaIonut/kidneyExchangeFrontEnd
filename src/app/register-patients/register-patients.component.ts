import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PatientRegistrationComponent, TogetherRegistrationComponent } from '../patient-registration/patient-registration.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-patients',
  templateUrl: './register-patients.component.html',
  styleUrls: ['./register-patients.component.css']
})
export class RegisterPatientsComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  openDialogTogether() {

    this.router.navigateByUrl('/#services');

    const dialogRef = this.dialog.open(TogetherRegistrationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogPatient() {

    this.router.navigateByUrl('/#services');

    const dialogRef = this.dialog.open(PatientRegistrationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
