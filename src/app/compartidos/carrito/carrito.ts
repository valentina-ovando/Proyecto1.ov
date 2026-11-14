import { Component, OnInit } from '@angular/core';
import { CarritoServicios } from '../../servicios/carrito-servicios';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito implements OnInit {

  productosCarrito: any[] = [];

  constructor(
    private carritoServicios: CarritoServicios
  ) {}

  ngOnInit(): void {
    this.productosCarrito =
      this.carritoServicios.obtenerCarrito();
  }

  aumentar(id: number): void {
    this.carritoServicios.aumentarCantidad(id);
  }

  disminuir(id: number): void {
    this.carritoServicios.disminuirCantidad(id);
  }

  eliminar(id: number): void {

    this.carritoServicios.eliminarProducto(id);

    this.productosCarrito =
      this.carritoServicios.obtenerCarrito();

  }

  calcularTotal(): number {
  return this.productosCarrito.reduce(
    (total, p) => total + (p.precio * p.cantidad), 0
  );
}

comprar() {
  alert("¡Gracias por tu compra! Total: $" + this.calcularTotal());
}

}
