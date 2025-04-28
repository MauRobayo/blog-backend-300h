import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  imports: [CommonModule],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.cargarPosts();
  }

    cargarPosts() {
      const postsGuardados = localStorage.getItem('posts');
      this.posts = postsGuardados ? JSON.parse(postsGuardados) : [];

    // Asignar una imagen aleatoria a cada post si no tiene
    this.posts.forEach(post => {
      if (!post.imagen) {
        post.imagen = this.obtenerImagenAleatoria();
      }
    });
  }

  obtenerImagenAleatoria(): string {
    const imagenes = [
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=60',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=60',
      'https://images.unsplash.com/photo-1510626176961-4b37d6afc5b9?auto=format&fit=crop&w=600&q=60',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=60'
    ];
    const indice = Math.floor(Math.random() * imagenes.length);
    return imagenes[indice];
  }

  crearPost() {
    this.router.navigate(['/crear-post']);
  }

  eliminarPost(index: number) {
    if (confirm('¿Estás seguro que quieres eliminar este post?')) {
      this.posts.splice(index, 1);
      localStorage.setItem('posts', JSON.stringify(this.posts));
      alert('Post eliminado correctamente.');
    }
  }

  formatearFecha(fechaISO: string): string {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
