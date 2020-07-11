import { Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';


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
  Usuario = '';
  Tipo = '';
  Usr:boolean;
  Pssw:boolean=false;
  verificador:boolean;
  constructor(private bdService: BdService, private router: Router) { }

  ngOnInit(): void {
    this.bdService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }
  mostrar() {
    this.sesion = true;
  }
  checkUsuario(){
    for (const usuario of this.usuarios) {
      if(usuario.Usuario === this.useri){
         this.Usr = true;
         break;
      }else{
        this.Usr = false;
      }
    }
  }
  checkPassword(){
    for (const usuario of this.usuarios) {
      if(usuario.Usuario === this.useri && usuario.Password === this.passwordi){
         this.Pssw = true;
        break;
      }else{
        this.Pssw = false;
      }
    }
  }
  inicio() {
    for (const usuario of this.usuarios) {
      if (usuario.Usuario === this.useri && usuario.Password === this.passwordi) {
        this.bdService.setUsuario(this.useri, usuario.Tipo);
        this.Usuario = this.useri;
        this.Tipo = usuario.Tipo;
        this.sesion = false;
        break;
      } else {
        this.error = true;
      }
    }
    this.useri = '';
    this.passwordi = '';
  }
  logoutf() {
    this.router.navigate(['pendientes']);
    window.location.reload();
  }

}
