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
  public total=0;
  ngOnInit() {
    this.dates=[];
    this.obtenerTalleres();
  }

  AgregarUser(){
    var aux=new ExtracDataUtils();

    this.user=<UserModel> aux.extrac(document);
    console.log(this.user)
    this.guardarInscripcion(this.user);

  }
  public dates;
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
         }
      });
  }
  public obtenerTalleres() {
    this._registerService.obtenerTalleres()
      .subscribe({
        next: (data) => {
          this.dates=data;
          console.log('Datos Enviados:', data);
        },
        error: (err) => {
          console.error('Error!:', err);
        },
        complete: () => {
          console.log('Guardar Datos OK.');
          var k=0;
          for(let x of this.dates){
            x["n"]="T"+k++;
          }
        }
      });
  }

  public variarCosto(value,data) {
    if (value == true) this.total = this.total + 10;
    else this.total=this.total-10;
    }
}
