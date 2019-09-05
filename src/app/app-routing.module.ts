import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

import { NavbarComponent } from './components/navbar/navbar.component';
//import { AuthGuard } from './auth.guard';
import { WorkerSearchComponent } from './components/worker-search/worker-search.component';
import { WorkerProfileComponent } from './components/worker-profile/worker-profile.component';
import { HomeComponent } from './components/home/home.component';
import { WorkerDashboardComponent } from './components/worker-dashboard/worker-dashboard.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { ClientOrdersComponent } from './components/client-orders/client-orders.component';
import { LaterComponent } from './components/later/later.component';

const routes: Routes = [
  
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },

 

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registration',
    component:RegistrationComponent,
    //canActivate:[AuthGuard]
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

  {
    path:'worker-dashboard',
    component:WorkerDashboardComponent
  },

  {
    path:'map-view',
    component:MapViewComponent
  },

  {
    path:'client-orders',
    component:ClientOrdersComponent
  },
 
  {
    path:'late',
    component:LaterComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
 


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }