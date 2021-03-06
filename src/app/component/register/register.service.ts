import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../../models/user.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class RegisterService {
  public urlAPI = 'https://seminario-seminario.7e14.starter-us-west-2.openshiftapps.com/';
  // public urlAPI = 'http://localhost:8080/';
  public Ruta = 'in';

  constructor(public _httpClient: HttpClient) {
  }

  // obtenerLista() {
  //   return this._httpClient.get(this.urlAPI + this.Ruta, httpOptions);
  // }

  public guardarIns(newIns: UserModel) {
    console.log(newIns);
    return this._httpClient.post(this.urlAPI + this.Ruta, newIns, httpOptions);
  }

  public obtenerTalleres() {
    return this._httpClient.get(this.urlAPI + 'taller', httpOptions);
  }

  public obtenerdni(dni: string) {
    return this._httpClient.get(this.urlAPI + this.Ruta + '/' + dni, httpOptions);
  }
}
