import {  Router } from '@angular/router';
import { BdService } from './../../../services/bd.service';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
  inicio() {
    for (const usuario of this.usuarios) {
      if (usuario.Usuario === this.useri && usuario.Password === this.passwordi) {
        this.bdService.setUsuario(this.useri, usuario.Tipo);
        this.Usuario = this.useri;
        this.Tipo = usuario.Tipo;
        this.router.navigate(['/pendientes']).then(() => {
          window.location.reload();
        })
        break;
      }
    }
    this.error = true;
    this.useri = '';
    this.passwordi = '';
  }

}
