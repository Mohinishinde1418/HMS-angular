import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'HOME', component: HomeComponent },
  { path: 'CONTACTUS', component: ContactUsComponent },
  { path: 'LOGIN', component: LoginComponent },
  { path: 'DASHBOARD', component: DashboardComponent },
  { path: 'PREVIEW', component: PreviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
