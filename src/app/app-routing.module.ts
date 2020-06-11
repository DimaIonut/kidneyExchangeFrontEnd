import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformationsComponent } from './informations/informations.component';
import { HelpDonatingComponent } from './help-donating/help-donating.component';
import { RegisterPatientsComponent } from './register-patients/register-patients.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'informations', component: InformationsComponent },
  { path: 'helpDonating', component: HelpDonatingComponent },
  { path: 'registerPatient', component: RegisterPatientsComponent },
  { path: 'statistic', component: StatisticComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
