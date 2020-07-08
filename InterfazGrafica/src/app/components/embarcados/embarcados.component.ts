import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-embarcados',
  templateUrl: './embarcados.component.html',
  styleUrls: ['./embarcados.component.css']
})
export class EmbarcadosComponent implements OnInit {

  constructor(private bdService:BdService) { }

  ngOnInit(): void {
    this.bdService.getEmbarcados().subscribe();
  }

}
