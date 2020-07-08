import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdService {

  constructor(private httpClient: HttpClient) { }

  getUsuarios() {
    return this.httpClient.get('http://localhost:3000/usuarios');
  }

  getPendientes() {
    return this.httpClient.get('http://localhost:3000/pendientes');
  }

  getFacturados() {
    return this.httpClient.get('http://localhost:3000/facturados');
  }

  getEmbarcados() {
    return this.httpClient.get('http://localhost:3000/embarcados');
  }

  getEntregados() {
    return this.httpClient.get('http://localhost:3000/entregados');
  }


}
