import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AjustesComponent } from './components/ajustes/ajustes.component';
import { AuthGuard } from './guards/auth.guard'; 

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] }, // 👈 protegido
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'ajustes', component: AjustesComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
