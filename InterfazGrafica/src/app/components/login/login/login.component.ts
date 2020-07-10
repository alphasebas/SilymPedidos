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
  useri: string;
  passwordi: string;
  tipoi = 'Ventas';
  editando = false;
  lista: string[] = ['Ventas', 'Facturacion', 'Almacen', 'Cobranza', 'Admin'];
  constructor(private bdService: BdService, private router: Router) { }
  ngOnInit(): void {
    this.actualizar();
  }
  limpiar() {
    this.useri = '';
    this.passwordi = '';
    this.tipoi = 'Ventas';
  }
  crear() {
    if (this.editando === false) {
      this.bdService.createUser(this.useri, this.passwordi, this.tipoi).subscribe(data => {
        this.actualizar();
      });
    } else {
      this.bdService.updateUser(this.useri, this.passwordi, this.tipoi).subscribe(data => {
        console.log(data);
        this.editando = false;
        this.actualizar();
      });
    }
  }
  edit(usuario: string) {
    for (const user of this.usuarios) {
      if (user.Usuario === usuario) {
        this.useri = user.Usuario;
        this.passwordi = user.Password;
        this.tipoi = user.Tipo;
        this.editando = true;
        break;
      }
    }
  }
  borrar(usuario: string) {
    for (const user of this.usuarios) {
      if (user.Usuario === usuario) {
        this.bdService.deleteUser(usuario).subscribe(data => {
          this.actualizar();
        });
      }
    }
  }
  actualizar() {
    this.bdService.getUsuarios().subscribe(data => {
      this.usuarios = data;
      this.limpiar();
    });
  }

}
