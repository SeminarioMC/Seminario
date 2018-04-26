import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../../models/user.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class RegisterService {
  // public urlAPI = 'http://backpiscis-backpiscsis.7e14.starter-us-west-2.openshiftapps.com/';
  // public urlAPI = 'http://localhost:8080/';
  public urlAPI = 'http://192.168.31.77:8080/'
  public Ruta = 'in';

  constructor(public _httpClient: HttpClient) { }

  // obtenerLista() {
  //   return this._httpClient.get(this.urlAPI + this.Ruta, httpOptions);
  // }

  public guardarIns(newIns: UserModel) {
    return this._httpClient.post(this.urlAPI + this.Ruta, newIns, httpOptions);
  }

  public obtenerTalleres(){
    return this._httpClient.get(this.urlAPI+"taller",httpOptions);
  }
}
