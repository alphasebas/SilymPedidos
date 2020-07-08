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
  constructor(private bdService: BdService) { }

  ngOnInit(): void {
  }
  probar() {
    alert(this.bdService.getTipoUsuario());
  }

}
