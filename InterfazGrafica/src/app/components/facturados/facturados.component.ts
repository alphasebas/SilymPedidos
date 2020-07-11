import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-facturados',
  templateUrl: './facturados.component.html',
  styleUrls: ['./facturados.component.css']
})
export class FacturadosComponent implements OnInit {
  facturados:any;
  constructor(private bdService: BdService) { }

  ngOnInit(): void {
    this.actualizar();

  }
  facturar(valor: string, folio: string) {
    this.bdService.facturar(folio, valor, 'Facturado').subscribe(data => {
      this.actualizar();
    });
  }
  parcial(valor: string, folio: string) {
    this.bdService.facturar(folio, valor, 'ParcialFacturado').subscribe(data => {
      this.actualizar();
    });
  }
  actualizar() {
    this.bdService.getporFacturar().subscribe(data => {
      this.facturados = data;
    });
  }

}
