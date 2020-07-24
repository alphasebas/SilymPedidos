import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscarcompras',
  templateUrl: './buscarcompras.component.html',
  styleUrls: ['./buscarcompras.component.css']
})
export class BuscarcomprasComponent implements OnInit {

  busquedaFI = false;
  busquedaP = false;
  busquedaF = false;
  resFI: any;
  resP: any;
  resF: any;
  resVer:any;
  encontradoFI = false;
  encontradoP = false;
  encontradoF = false;
  tipo: string;
  constructor(private bdService: BdService, private router: Router ) { }

  ngOnInit(): void {
    this.tipo = this.bdService.getTipoUsuario();
  }
  modificar(folio: string) {
    this.bdService.modifbuscarC(folio).subscribe(data => {
      this.router.navigate(['enprocesocompras']);
    });
  }
  buscarFI(busqueda: string) {
    this.bdService.getFolioC(busqueda).subscribe(data => {
      this.resFI = data;
      this.encontradoFI = true;
    });
  }
  buscarP(busqueda: string) {
    this.bdService.getProv(busqueda).subscribe(data => {
      this.resP = data;
      this.encontradoP = true;
    });
  }
  buscarF(fechaDe: string, fechaHasta: string) {
    this.bdService.getFechaLlegada(fechaDe, fechaHasta).subscribe(data => {
      this.resF = data;
      this.encontradoF = true;
    });
  }
  botonVer(folio:string){
    this.bdService.getFolioC(folio).subscribe(data => {
      this.resVer = data;
    });
  }
  toggle(valor: string) {
    if (valor === 'FI') {
      this.busquedaFI = !this.busquedaFI;
      this.encontradoFI = false;
    }

    if (valor === 'P') {
      this.busquedaP = !this.busquedaP;
      this.encontradoP = false;
    }

    if (valor === 'F') {
      this.busquedaF = !this.busquedaF;
      this.encontradoF = false;
    }
  }
}

