import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class Carrito {

  carrito: any[] = [];

  agregarProducto(producto: Producto) {

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

  obtenerCarrito() {
    return this.carrito;
  }

  eliminarProducto(id: number) {
    this.carrito = this.carrito.filter(
      p => p.id !== id
    );
  }

}
