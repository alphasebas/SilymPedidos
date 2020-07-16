import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-facturados',
  templateUrl: './facturados.component.html',
  styleUrls: ['./facturados.component.css']
})
export class FacturadosComponent implements OnInit {
  facturados:any;
  Fact:string;
  constructor(private bdService: BdService) { }

  ngOnInit(): void {
    this.actualizar();

  }

  facturar(valor: string, folio: string) {
    if(this.Fact!==''){
      this.bdService.facturar(folio, valor, 'Facturado').subscribe(data => {
        this.actualizar();
      });
    }else{
      alert("Se requiere el campo de factura");
    }
    }

  parcial(valor: string, folio: string) {
    if(this.Fact!==''){
      this.bdService.facturar(folio, valor, 'ParcialFact').subscribe(data => {
        this.actualizar();
      });
    }else{
      alert("Se requiere el campo de factura");
    }

  }
  actualizar() {
    this.bdService.getporFacturar().subscribe(data => {
      this.facturados = data;
    });
  }

}
