import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DonorRegistrationComponent, FamilyMemberComponent, FriendDonorComponent } from '../donor-registration/donor-registration.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-donating',
  templateUrl: './help-donating.component.html',
  styleUrls: ['./help-donating.component.css']
})
export class HelpDonatingComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }


  openDialog(type: string) {

    this.router.navigateByUrl('/#services');

    var dialogRef;
    if (type === 'family') {
      dialogRef = this.dialog.open(FamilyMemberComponent);
    } if (type === 'friend') {
      dialogRef = this.dialog.open(FriendDonorComponent);
    } if (type === 'any') {
      dialogRef = this.dialog.open(DonorRegistrationComponent);
    }

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
