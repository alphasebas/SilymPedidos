import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-autorizar',
  templateUrl: './autorizar.component.html',
  styleUrls: ['./autorizar.component.css']
})
export class AutorizarComponent implements OnInit {

  pendientes: any;
  constructor(private bdService: BdService) { }

  ngOnInit(): void {
    this.actualizar();
  }

  autorizacion(valor: string, folio: string) {

    const user = this.bdService.getUsuario();
    this.bdService.autorizacion(valor, folio, user).subscribe(data => {
      this.actualizar();
    });
  }
  actualizar() {
    this.bdService.getporAutorizar().subscribe(data => {

      this.pendientes = data;

    });
  }

}
