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
  public user:UserModel;
  public total=0;
  public talleres=[];
  ngOnInit() {
    this.dates=[];
    this.obtenerTalleres();

  }

  AgregarUser(){
    var aux=new ExtracDataUtils();

    this.user=<UserModel> aux.extrac(document);
    this.user.talleres=this.talleres;

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

    if (value == true) {
      this.total = this.total + 10;
      this.agregarTaller(data["_id"])
    }
    else{
      this.total=this.total-10;
      this.quitarTallere(data["_id"])
    }
    console.log(this.talleres);
  }

  public agregarTaller(id){

    this.talleres=this.talleres.filter(e=>e!=id);
    this.talleres.push(id);
  }
  public quitarTallere(id){
    this.talleres=this.talleres.filter(e=>e!=id);
  }
}
