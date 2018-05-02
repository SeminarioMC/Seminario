import {Component, OnInit} from '@angular/core';
import {ExtracDataUtils} from '../../utils/extracData.utils';
import {RegisterService} from './register.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  flag = true;
  inscripcion: UserModel = {
    dni: '',
    nombre: '',
    apellidos: '',
    correo: '',
    talleres: null
  };

  public dates;
  public recibidos;

  constructor(public _registerService: RegisterService) {
  }

  public user: UserModel;
  public total = 0;
  public talleres = [];

  ngOnInit() {
    this.dates = [];
    this.obtenerTalleres();

  }

  mensaje() {
    this.flag = false;
  }

  report(dni: string) {
    console.log('el dni es', dni);
    this._registerService.obtenerdni(dni)
      .subscribe({
        next: (data) => {
          this.recibidos = data;
          console.log('Datos de consulta recibidos:', data);
        },
        error: (err) => {
          console.error('Error en consulta!:', err);
          alert(err);
        },
        complete: () => {
          console.log('Consulta satisfactoria.');
        }
      });

  }

  AgregarUser() {
    const aux = new ExtracDataUtils();

    this.user = <UserModel> aux.extrac(document);
    this.user.talleres = this.talleres;

    this.guardarInscripcion(this.user);

  }

  public guardarInscripcion(inscripcion: UserModel) {
    this._registerService.guardarIns(inscripcion)
      .subscribe({
        next: (data) => {
          console.log('Datos Enviados:', data);
        },
        error: (err) => {
          console.error('Error!:', err);
        },
        complete: () => {
          // setTimeout(window.location.reload(), 3000);
        }
      });
  }

  public obtenerTalleres() {
    this._registerService.obtenerTalleres()
      .subscribe({
        next: (data) => {
          this.dates = data;
          console.log('Datos Enviados:', data);
        },
        error: (err) => {
          console.error('Error!:', err);
        },
        complete: () => {
          console.log('Guardar Datos OK.');
          let k = 0;
          for (const x of this.dates) {
            x['n'] = 'T' + k++;
          }
        }
      });
  }

  public variarCosto(value, data) {

    if (value == true) {

      this.total = this.total + 10;
      this.agregarTaller(data['_id']);
    }
    else {
      this.total = this.total - 10;
      this.quitarTallere(data['_id']);
    }
    console.log(this.talleres);
  }


  public agregarTaller(id) {

    this.talleres = this.talleres.filter(e => e != id);
    this.talleres.push(id);
  }

  public quitarTallere(id) {
    this.talleres = this.talleres.filter(e => e != id);
  }
}
