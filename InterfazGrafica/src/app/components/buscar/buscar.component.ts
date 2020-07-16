import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  busquedaFI:boolean=false;
  busquedaC:boolean=false;
  busquedaF:boolean=false;
  res:any
  constructor(private bdService: BdService ) { }

  ngOnInit(): void {
  }
  buscar(busqueda:string){
    this.bdService.getFolio(busqueda).subscribe(data =>{
      this.res = data;
    })
  }
  toggle(valor:string){
    if(valor=='FI'){
      this.busquedaFI = !this.busquedaFI;
    }

    if(valor=='C'){
      this.busquedaC = !this.busquedaC;
    }

    if(valor=='F'){
      this.busquedaF = !this.busquedaF;
    }


  }
}
