import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-facturados',
  templateUrl: './facturados.component.html',
  styleUrls: ['./facturados.component.css']
})
export class FacturadosComponent implements OnInit {
  facturados:any;
  constructor(private bdService:BdService) { }

  ngOnInit(): void {
    this.bdService.getporFacturar().subscribe(data =>{
      this.facturados = data;
    });

  }
  prueba(valor: string) {
    console.log(valor);
  }

}
