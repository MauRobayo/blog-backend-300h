import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AjustesComponent } from './pages/ajustes/ajustes.component';
import { PostsComponent } from './pages/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    PerfilComponent,
    AjustesComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   
    CommonModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
