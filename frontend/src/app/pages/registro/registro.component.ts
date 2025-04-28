import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    const user = {
      email: this.email,
      password: this.password,
    };

    localStorage.setItem('registeredUser', JSON.stringify(user));

    // También simulamos el inicio de sesión
    localStorage.setItem('token', 'token-falso-123');

    this.router.navigate(['/perfil']);
  }
}
