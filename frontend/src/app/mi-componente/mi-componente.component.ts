import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';
import { Usuario } from '../usuario';
import { checkNoChangesNode } from '@angular/core/src/view/view';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})

export class MiComponenteComponent implements OnInit {

  usuarios: Array<Usuario>;
  mostrar: boolean;
  id: number;
  selectedUser: Usuario;

  onSelect(usuario: Usuario): void {
    this.selectedUser = usuario;
  }

  insertarForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl('')
  });

  addUser(user: Usuario) {
    this.usuarios.push(user);
  }
  // mejor formulario reactivos
  // formbuilder simplifica sintaxis

  showAllUsers() {
    this.service.getAllUsers()
      .subscribe((data: Array<Usuario>) => this.usuarios = data);
  }

  showUser(id: number) {
    this.service.getUser(id)
      .subscribe((data: Usuario) => {
        this.usuarios = new Array<Usuario>();
        this.usuarios.push(data);
        this.id = null;
      }, (error) => console.log(error));
  }

  borrarUsuario(id: number) {
    this.service.deleteUser(id)
      .subscribe(() => {
        let indexOf = 0;
        this.usuarios.find((item, index) => {
          if (item.id === id) {
            indexOf = index;
            return true;
          }
        });
        this.usuarios.splice(indexOf, 1);
        console.log(this.usuarios);
      });
  }

  borrarUsuarios() {
    this.service.deleteAllUser()
      .subscribe(() => {
        delete this.usuarios;
      })
  }

  modificarUsuario(usuario: Usuario) {
    this.service.updateUser(usuario.id, usuario.nombre, usuario.apellido)
      .subscribe()
  }

  ocultarDatos() {
    this.id = null;
    this.mostrar = false;
  }

  mostrarDatos() {
    this.mostrar = true;
  }

  constructor(private service: HttpServiceService) {

  }

  ngOnInit() {
    this.mostrarDatos();
    this.showAllUsers();
  }

}
