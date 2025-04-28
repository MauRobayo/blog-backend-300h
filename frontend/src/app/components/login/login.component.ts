import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.email === 'admin@example.com' && this.password === 'admin123') {
      this.authService.login({ email: this.email, password: this.password });
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Credenciales incorrectas.';
    }
  }
}
