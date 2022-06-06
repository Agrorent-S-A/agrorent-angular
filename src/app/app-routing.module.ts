import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { LogginComponent } from './loggin/loggin.component';
import { RentComponent } from './rent/rent.component';
import { UsComponent } from './us/us.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AdvertisementInfoComponent } from './advertisement-info/advertisement-info.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'advertise', component:AdvertiseComponent  },
  { path: 'loggin', component: LogginComponent },
  { path: 'rent', component: RentComponent },
  { path: 'us', component: UsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'advertisement-info/:id', component: AdvertisementInfoComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  

})
export class AppRoutingModule { }
