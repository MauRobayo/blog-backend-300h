import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  cantidadPosts: number = 0;
  usuario: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.cargarCantidadPosts();
    this.obtenerUsuario();
  }

  cargarCantidadPosts() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const postsGuardados = localStorage.getItem('posts');
      const posts = postsGuardados ? JSON.parse(postsGuardados) : [];
      this.cantidadPosts = posts.length;
    }
  }

  obtenerUsuario() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.usuario = localStorage.getItem('nombre') || 'Usuario Invitado';
    }
  }

  irACrearPost() {
    this.router.navigate(['/crear-post']);
  }

  irAVerPosts() {
    this.router.navigate(['/posts']);
  }

  irAVerPerfil() {
    this.router.navigate(['/perfil']);
  }

  irAAjustes() {
    this.router.navigate(['/ajustes']);
  }
}
