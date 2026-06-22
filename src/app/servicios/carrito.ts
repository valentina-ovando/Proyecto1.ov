import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class Carrito {

  private carrito: any[] = [];

  // CREATE
  crear(producto: Producto) {

    const existe = this.carrito.find(
      p => p.id === producto.id
    );

    if (existe) {
      existe.cantidad++;
    } else {
      this.carrito.push({
        ...producto,
        cantidad: 1
      });
    }
  }

  // READ
  leer() {
    return this.carrito;
  }

  // UPDATE
  actualizar(id: number, cantidad: number) {

    const producto = this.carrito.find(
      p => p.id === id
    );

    if (producto) {
      producto.cantidad = cantidad;
    }
  }

  // DELETE
  eliminar(id: number) {
    this.carrito = this.carrito.filter(
      p => p.id !== id
    );
  }
}
