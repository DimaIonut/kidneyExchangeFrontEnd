import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donor-registration',
  templateUrl: './donor-registration.component.html',
  styleUrls: ['./donor-registration.component.css']
})
export class DonorRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'family-member',
  templateUrl: 'family-member.component.html',
  styleUrls: ['./donor-registration.component.css']
})
export class FamilyMemberComponent { }

@Component({
  selector: 'friend-donor',
  templateUrl: 'friend-donor.component.html',
  styleUrls: ['./donor-registration.component.css']
})
export class FriendDonorComponent { }
