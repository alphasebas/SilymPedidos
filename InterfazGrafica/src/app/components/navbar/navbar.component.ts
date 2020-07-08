import { Router } from '@angular/router';
import { LoginComponent } from './../login/login/login.component';
import { BdService } from 'src/app/services/bd.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sesion = false;
  usuarios: any;
  temp: any;
  useri: string;
  passwordi: string;
  error: boolean;
  Usuario: string;
  Tipo: string;
  constructor(private bdService: BdService, private router: Router) { }

  ngOnInit(): void {
    this.bdService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }
  mostrar() {
    this.sesion = true;
  }
  inicio() {
    for (const usuario of this.usuarios) {
      if (usuario.Usuario === this.useri && usuario.Password === this.passwordi) {
        this.bdService.setUsuario(this.useri, usuario.Tipo);
        this.Usuario = this.useri;
        this.Tipo = usuario.Tipo;
        this.sesion = false;
        this.router.navigate(['pendientes']);
        break;
      }
    }
    this.error = true;
    this.useri = '';
    this.passwordi = '';
  }

}
