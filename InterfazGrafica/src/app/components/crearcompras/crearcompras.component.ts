import { BdService } from 'src/app/services/bd.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crearcompras',
  templateUrl: './crearcompras.component.html',
  styleUrls: ['./crearcompras.component.css']
})
export class CrearcomprasComponent implements OnInit {
  comprasform;
  provi: string;
  fechadeseada: string;
  productos = '';
  constructor(private formBuilder: FormBuilder, private bdService: BdService) {
    this.comprasform = this.formBuilder.group({
      provi: [''],
      fechadeseada: ['', Validators.required],
      productos: [''],
    });
   }

  ngOnInit(): void {
  }
  crear() {

  }

}
