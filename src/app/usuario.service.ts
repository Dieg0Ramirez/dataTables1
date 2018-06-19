import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  domain: string = 'http://localhost:3977';

  constructor(private http: HttpClient) { }

  getUsuario() {

    return this.http.get<Usuario[]>(`${this.domain}/api/usuarios`).pipe(res => res);
  }
}
