import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AccountComponent } from './account/account.component';
import { authGuard  } from './auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent, canActivate: [authGuard] },

  { path: 'register', component: RegisterComponent },
  {path:'',redirectTo:'/events',pathMatch:'full'},
  { path: 'events', component: EventListComponent },
  {path:'create',component:EventCreateComponent},
  { path: 'events/edit/:id', component: EventCreateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
