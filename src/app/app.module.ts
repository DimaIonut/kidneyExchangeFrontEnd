import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatSnackBarModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InformationsComponent } from './informations/informations.component';
import { HelpDonatingComponent } from './help-donating/help-donating.component';
import { RegisterPatientsComponent } from './register-patients/register-patients.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DonorRegistrationComponent, FamilyMemberComponent, FriendDonorComponent } from './donor-registration/donor-registration.component';
import { PatientRegistrationComponent, TogetherRegistrationComponent } from './patient-registration/patient-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformationsComponent,
    HelpDonatingComponent,
    RegisterPatientsComponent,
    StatisticComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent,
    LoginComponent,
    DonorRegistrationComponent,
    FamilyMemberComponent,
    FriendDonorComponent,
    PatientRegistrationComponent,
    TogetherRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatRadioModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent,
    DonorRegistrationComponent,
    FamilyMemberComponent,
    FriendDonorComponent,
    PatientRegistrationComponent,
    TogetherRegistrationComponent
  ]
})
export class AppModule { }
