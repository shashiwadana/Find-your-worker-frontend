import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
const routes: Routes = [
  
  {
    path:'',
    redirectTo:'/events',
    pathMatch:'full'
  },

  {
    path:'components/events',
    component:EventsComponent
  },

  {
    path:'components/login',
    component:LoginComponent
  },
  {
    path:'components/registration',
    component:RegistrationComponent
  },
  {
    path:'components/special-events',
    component:SpecialEventsComponent
  },






];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }