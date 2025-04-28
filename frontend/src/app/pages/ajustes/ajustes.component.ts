import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajustes',
  standalone: true,
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css'],
  imports: [FormsModule, CommonModule]
})
export class AjustesComponent implements OnInit {
  nombre: string = '';
  correo: string = '';
  mensajeGuardado: string = ''; // CAMBIO: ahora es string

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.nombre = localStorage.getItem('nombre') || '';
      this.correo = localStorage.getItem('correo') || '';
    }
  }

  guardarCambios() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('nombre', this.nombre);
      localStorage.setItem('correo', this.correo);
      this.mensajeGuardado = 'Datos actualizados'; // CAMBIO: asigna texto
      setTimeout(() => this.mensajeGuardado = '', 3000);
    }
  }
}
