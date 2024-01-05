import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
import { HomeComponent } from './component/home/home.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { LoginComponent } from './component/login/login.component';
import { AboutComponent } from './component/about/about.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';

const routes: Routes = [
 {path: '', redirectTo: 'welcome', pathMatch: 'full'},
 {path: 'welcome', component:WelcomeComponent},
 {path: 'home', component:HomeComponent},
 {path: 'register', component:RegistrationComponent},
 {path: 'login', component:LoginComponent},
 {path: 'about', component:AboutComponent},
 {path: 'list-customers', component:CustomerListComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
