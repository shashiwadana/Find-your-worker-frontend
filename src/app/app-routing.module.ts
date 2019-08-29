import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuard } from './auth.guard';
import { WorkerSearchComponent } from './components/worker-search/worker-search.component';
import { WorkerProfileComponent } from './components/worker-profile/worker-profile.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },

  {
    path:'events',
    component:EventsComponent
  },

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'special-events',
    component:SpecialEventsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'worker-search',
    component:WorkerSearchComponent
  },
  {
    path:'worker-profile',
    component:WorkerProfileComponent
  },
  {
    path:'home',
    component:HomeComponent
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }