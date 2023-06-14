export class Producto{
  constructor(id, url, categoria, nombre, precio, descripcion){
    this.id = id; 
    this.url = url; 
    this.categoria = categoria; 
    this.nombre = nombre; 
    this.precio = precio; 
    this.descripcion = descripcion; 
  }
  getUrl() {
    return this.url;
  }

  getCategoria() {
    return this.categoria;
  }

  getNombre() {
    return this.nombre;
  }

  getPrecio() {
    return this.precio;
  }

  getDescripcion() {
    return this.descripcion;
  }

  // Métodos Setter
  setUrl(url) {
    this.url = url;
  }

  setCategoria(categoria) {
    this.categoria = categoria;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  setPrecio(precio) {
    this.precio = precio;
  }

  setDescripcion(descripcion) {
    this.descripcion = descripcion;
  }

  // Otros métodos
  mostrarInformacion() {
    console.log("Información del producto:");
    console.log("URL: ", this.getUrl());
    console.log("Categoría: ", this.getCategoria());
    console.log("Nombre: ", this.getNombre());
    console.log("Precio: ", this.getPrecio());
    console.log("Descripción: ", this.getDescripcion());
  }  
}