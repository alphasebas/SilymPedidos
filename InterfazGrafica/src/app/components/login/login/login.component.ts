import { BdService } from './../../../services/bd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios: any;
  constructor(private bdService: BdService) { }
  ngOnInit(): void {
    this.bdService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

}
