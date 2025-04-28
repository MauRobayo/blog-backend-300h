import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,  // Asegúrate que tengas esto
  imports: [CommonModule, FormsModule],  // 👈 Agregado aquí
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.email === 'admin@example.com' && this.password === 'admin123') {
      localStorage.setItem('token', 'token-falso-123');
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Credenciales incorrectas.';
    }
  }
}
