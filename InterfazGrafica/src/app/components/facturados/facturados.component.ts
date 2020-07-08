import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-facturados',
  templateUrl: './facturados.component.html',
  styleUrls: ['./facturados.component.css']
})
export class FacturadosComponent implements OnInit {

  constructor(private bdService:BdService) { }

  ngOnInit(): void {
    this.bdService.getFacturados().subscribe();
  }

}
