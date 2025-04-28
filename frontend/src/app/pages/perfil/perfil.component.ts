import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public nombre: string = '';
  public correo: string = '';
  public fechaRegistro: string = '';

  constructor() {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.nombre = localStorage.getItem('nombre') || 'Usuario Invitado';
      this.correo = localStorage.getItem('correo') || 'correo@ejemplo.com';
      this.fechaRegistro = localStorage.getItem('fechaRegistro') || 'Abril 2025';
    }
  }
}
