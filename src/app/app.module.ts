import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { RentComponent } from './rent/rent.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { LogginComponent } from './loggin/loggin.component';
import { UsComponent } from './us/us.component';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { advertisements } from '../app/services/advertisements.service';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { AdvertisementInfoComponent } from './advertisement-info/advertisement-info.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

import { provideStorage, StorageModule } from '@angular/fire/storage';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RentComponent,
    AdvertiseComponent,
    LogginComponent,
    UsComponent,
    FooterComponent,
    RegisterComponent,
    LogoutComponent,
    ProfileComponent,
    AdvertisementInfoComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatFormFieldModule,// or SharedModule that exports MatFormFieldModule
    MatSelectModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(()=>initializeApp(environment.firebaseConfig)),
    provideStorage(()=>getStorage()),
    MatCardModule,
    MatGridListModule,
    StorageModule
  ],
  providers: [advertisements],
  bootstrap: [AppComponent]
})
export class AppModule { }
