export class Usuario{
  constructor(nombre, correo, contraseña){
    this.nombre = nombre; 
    this.correo = correo; 
    this.contraseña = contraseña; 
  }
  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  getCorreo() {
    return this.correo;
  }

  setCorreo(correo) {
    this.correo = correo;
  }

  getEdad() {
    return this.edad;
  }

  setEdad(edad) {
    this.edad = edad;
  }
}