
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
import { EventsComponent } from './components/events/events.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { EventService } from './services/event.service';

import{ToastrModule} from 'ngx-toastr';
//import{AuthGuard} from './auth.guard';
import { WorkerSearchComponent } from './components/worker-search/worker-search.component';
import { WorkerProfileComponent } from './components/worker-profile/worker-profile.component';
import { HomeComponent } from './components/home/home.component';
import { WorkerDashboardComponent } from './components/worker-dashboard/worker-dashboard.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { BooknowComponent } from './components/worker-search/booknow/booknow.component';
import { BooklaterComponent } from './components/worker-search/booklater/booklater.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    EventsComponent, 
    SpecialEventsComponent,
    NavbarComponent,
    WorkerSearchComponent,
    WorkerProfileComponent,
    HomeComponent,
    WorkerDashboardComponent,
    MapViewComponent,
    BooknowComponent,
    BooklaterComponent,
    
    
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
  ],
 // providers: [AuthService,AuthGuard, EventService],
  providers: [AuthService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
    