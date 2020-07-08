import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-enproceso',
  templateUrl: './enproceso.component.html',
  styleUrls: ['./enproceso.component.css']
})
export class EnprocesoComponent implements OnInit {

  constructor(private bdService:BdService) { }

  ngOnInit(): void {
    this.bdService.getEnProceso().subscribe();
  }

}
