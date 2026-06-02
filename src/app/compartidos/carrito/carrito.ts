import { Component } from '@angular/core';
import { Carrito as CarritoService } from '../../servicios/carrito';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {

  productosCarrito: any[] = [];

  constructor(private carritoService: CarritoService) {
    this.productosCarrito =
      this.carritoService.obtenerCarrito();
  }

  sumarCantidad(producto: any) {
    producto.cantidad++;
  }

  restarCantidad(producto: any) {
    if (producto.cantidad > 1) {
      producto.cantidad--;
    }
  }

  eliminarProducto(id: number) {
    this.carritoService.eliminarProducto(id);

    this.productosCarrito =
      this.carritoService.obtenerCarrito();
  }

}
