export interface UserModel {
  dni:string;
  nombre:string;
  apellidos:string;
  correo:string;
  talleres:string[];
}
export interface Taller{
  id:string,
  taller:string,
  horario:string,
  nombre:string,
  ambiente:string,
  costo:string
}
