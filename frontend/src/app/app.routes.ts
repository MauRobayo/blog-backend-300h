import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AjustesComponent } from './pages/ajustes/ajustes.component';
import { PostsComponent } from './pages/posts/posts.component';
import { CrearPostComponent } from './pages/crear-post/crear-post.component'; 
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'ajustes', component: AjustesComponent},
  { path: 'posts', component: PostsComponent }, 
  { path: 'crear-post', component: CrearPostComponent}
];
