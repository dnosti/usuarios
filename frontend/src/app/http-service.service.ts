import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {

  usuariosUrl = 'http://localhost:8080/usuarios/';

  getAllUsers() {
    return this.http.get(this.usuariosUrl);
  }

  getUser(id: number) {
    const url = `${this.usuariosUrl}${id}`;
    return this.http.get(url);
  }

  deleteUser(id: number) {
    const url = `${this.usuariosUrl}${id}`;
    return this.http.delete(url);
  }

  deleteAllUser() {
    return this.http.delete(this.usuariosUrl);
  }

  updateUser(id: number, nombre: string, apellido: string) {
    const url = `${this.usuariosUrl}${id}`;
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };
    
    return this.http.put(url, {nombre, apellido}, httpOptions);
  }

  createUser(nombre: string, apellido: string) {
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.usuariosUrl, {nombre, apellido}, httpOptions);
  }

  constructor(private http: HttpClient) { }   // HTTPClient Singleton
}
