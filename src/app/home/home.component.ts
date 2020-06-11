import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { HelpDonatingComponent } from '../help-donating/help-donating.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titlepage: Title, private router: Router, public dialog: MatDialog, private loginService: AuthenticationService, public logOutBar: MatSnackBar) { }

  setpageTitle(title: string) {

    this.titlepage.setTitle(title);
  }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  logOut() {
    this.loginService.logOut();
    this.router.navigateByUrl('/#page-top').then(() => {
      this.logOutBar.open("V-ati deconectat!", "OK", {
        panelClass: ['green-snackbar']
      });
      window.scrollTo(0, 0);
    });
  }
}
