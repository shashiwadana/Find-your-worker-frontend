
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
;

import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './services/auth.service';


import{ToastrModule} from 'ngx-toastr';
//import{AuthGuard} from './auth.guard';
import { WorkerSearchComponent } from './components/worker-search/worker-search.component';
import { WorkerProfileComponent } from './components/worker-profile/worker-profile.component';
import { HomeComponent } from './components/home/home.component';
import { WorkerDashboardComponent } from './components/worker-dashboard/worker-dashboard.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { BooknowComponent } from './components/worker-search/booknow/booknow.component';
import { BooklaterComponent } from './components/worker-search/booklater/booklater.component';
import { LaterComponent } from './components/later/later.component';
import { ClientOrdersComponent } from './components/client-orders/client-orders.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    
    
    NavbarComponent,
    WorkerSearchComponent,
    WorkerProfileComponent,
    HomeComponent,
    WorkerDashboardComponent,
    MapViewComponent,
    BooknowComponent,
    BooklaterComponent,
    LaterComponent,
    ClientOrdersComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule ,
    ToastrModule.forRoot({
      timeOut:500,
      positionClass:'toast-top-right',
      preventDuplicates:false, 
      
    }),
    AgmCoreModule.forRoot({
     // apiKey: 'AIzaSyB8lgLyWZZBgmCV6EAVADrIanxU03jXfWc'
     }),


  ],
 // providers: [AuthService,AuthGuard, EventService],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
    