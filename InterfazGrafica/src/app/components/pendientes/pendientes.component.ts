import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {

  constructor(private bdService:BdService) { }

  ngOnInit(): void {
    this.bdService.getPendientes().subscribe();
  }

}
