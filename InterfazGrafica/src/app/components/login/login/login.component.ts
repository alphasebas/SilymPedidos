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
    }
  }
  actualizar() {
    this.bdService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

}
