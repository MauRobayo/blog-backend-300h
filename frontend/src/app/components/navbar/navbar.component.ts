import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(public router: Router) {}

  ngOnInit() {
    this.checkLogin();

    // Cada vez que la ruta cambie, volvemos a chequear si está logueado
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkLogin();
      });
  }

  checkLogin() {
    if (typeof window !== 'undefined') {
      this.isLoggedIn = !!localStorage.getItem('token');
    }
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      this.isLoggedIn = false;
      this.router.navigate(['/login']);
    }
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
