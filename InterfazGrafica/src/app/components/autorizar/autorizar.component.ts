import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-autorizar',
  templateUrl: './autorizar.component.html',
  styleUrls: ['./autorizar.component.css']
})
export class AutorizarComponent implements OnInit {

  pendientes:any;
  constructor(private bdService:BdService) { }

  ngOnInit(): void {
    this.bdService.getporAutorizar().subscribe(data =>{
      this.pendientes = data;
      console.log(data);

    });

  }

  autorizacion(valor:string, folio:string){


    this.bdService.autorizacion(valor,folio).subscribe(data =>{
      console.log(data);
      this.actualizar();
    })
  }
  actualizar(){
    this.bdService.getporAutorizar().subscribe(data =>{

      this.pendientes = data;

    });
  }

}
