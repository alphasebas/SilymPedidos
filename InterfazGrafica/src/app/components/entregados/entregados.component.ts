import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-entregados',
  templateUrl: './entregados.component.html',
  styleUrls: ['./entregados.component.css']
})
export class EntregadosComponent implements OnInit {

  constructor(private bdService:BdService) { }

  ngOnInit(): void {
    this.bdService.getEntregados().subscribe();
  }

}
