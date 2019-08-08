import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-insertar-form',
  templateUrl: './insertar-form.component.html',
  styleUrls: ['./insertar-form.component.css']
})
export class InsertarFormComponent implements OnInit {

  @Output() actualizar = new EventEmitter<Usuario>();

  insertarForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl('')
  })

  submitUser() {
    let nombre = this.insertarForm.get("nombre").value;
    let apellido = this.insertarForm.get("apellido").value;
    this.service.createUser(nombre, apellido).subscribe((data: Usuario) => {
      this.actualizar.emit(data);
      this.insertarForm.reset();
    });
  }

  constructor(private service: HttpServiceService) { }

  ngOnInit() {
  }

}
