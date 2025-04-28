import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-post',
  standalone: true,
  templateUrl: './crear-post.component.html',
  styleUrls: ['./crear-post.component.css'],
  imports: [CommonModule, FormsModule],
})
export class CrearPostComponent {
  titulo: string = '';
  contenido: string = '';

  constructor(private router: Router) {}

  crearPost() {
    if (this.titulo.trim() && this.contenido.trim()) {
      const fecha = new Date().toLocaleString(); // 👉 obtenemos fecha actual
      const registeredUser = localStorage.getItem('registeredUser');
      let autor = 'Anónimo';

      if (registeredUser) {
        const user = JSON.parse(registeredUser);
        autor = user.email || 'Anónimo'; // 👉 usamos el email como autor
      }

      const nuevoPost = {
        titulo: this.titulo,
        contenido: this.contenido,
        fecha,
        autor
      };

      const postsGuardados = localStorage.getItem('posts');
      const posts = postsGuardados ? JSON.parse(postsGuardados) : [];
      posts.push(nuevoPost);
      localStorage.setItem('posts', JSON.stringify(posts));

      alert('¡Post creado exitosamente!');
      this.router.navigate(['/posts']);
    } else {
      alert('Por favor completa todos los campos.');
    }
  }
}

