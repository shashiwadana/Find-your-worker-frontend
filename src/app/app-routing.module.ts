import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { NavbarComponent } from './components/navbar/navbar.component';
const routes: Routes = [
  
  {
    path:'',
    redirectTo:'events',
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
    component:SpecialEventsComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }