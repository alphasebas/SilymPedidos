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

}
