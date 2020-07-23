import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-porrecibir',
  templateUrl: './porrecibir.component.html',
  styleUrls: ['./porrecibir.component.css']
})
export class PorrecibirComponent implements OnInit {

  porRecibir: any;

  constructor(private bdService: BdService) { }

  ngOnInit(): void {
    this.actualizar();
  }

  actualizar() {
    this.bdService.getporRecibir().subscribe(data => {
      this.porRecibir = data;
      console.log(this.porRecibir);
    });
  }

  recibido(fact:string,fechaLlegada:string,obsA:string,folio:string,estado:string){
    if (fechaLlegada !== '') {
      this.bdService.updateRecibido(fact,fechaLlegada,obsA,folio,estado).subscribe(data => {
        this.actualizar();

      });
    } else {
    alert(' Es necesario llenar el campo Fecha de Llegada');
    }

  }

}
