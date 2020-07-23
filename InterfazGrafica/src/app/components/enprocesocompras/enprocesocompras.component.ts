import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-enprocesocompras',
  templateUrl: './enprocesocompras.component.html',
  styleUrls: ['./enprocesocompras.component.css']
})
export class EnprocesocomprasComponent implements OnInit {
  enProceso:any;
  constructor(private bdService: BdService) { }

  ngOnInit(): void {
    this.actualizar();
  }

  actualizar() {
    this.bdService.getEnProcesoCompras().subscribe(data => {
      this.enProceso = data;
    });
  }
}
