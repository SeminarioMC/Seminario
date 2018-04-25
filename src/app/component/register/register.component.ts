import { Component, OnInit } from '@angular/core';
import {ExtracDataUtils} from '../../utils/extracData.utils';
import {RegisterService} from './register.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public _registerService:RegisterService) { }
  user:UserModel;

  ngOnInit() {
  }

  AgregarUser(){
    var aux=new ExtracDataUtils();

    this.user=<UserModel> aux.extrac(document);
    console.log(this.user)
    this.guardarInscripcion(this.user);
  }
  public guardarInscripcion(inscripcion:UserModel) {
    this._registerService.guardarIns(inscripcion)
      .subscribe({
        next: (data) => {
          console.log('Datos Enviados:', data);
        },
        error: (err) => {
          console.error('Error!:', err);
        },
        complete: () => {
          console.log('Guardar Datos OK.');
        }
      });
  }
}
