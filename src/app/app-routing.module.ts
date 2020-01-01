import { ProjectsComponent } from './projects/projects.component';
import { AuthgaurdService } from './services/authgaurd.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthgaurdService]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthgaurdService]},
  { path: 'projects', component: ProjectsComponent, canActivate: [AuthgaurdService]},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
