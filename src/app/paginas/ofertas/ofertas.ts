import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoServicios } from '../../servicios/carrito-servicios';

@Component({
  selector: 'app-ofertas',
  imports: [],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css'
})
export class Ofertas {

  constructor(
    private carritoServicios: CarritoServicios
  ) {}

  agregarCarrito(producto: Producto): void {
    this.carritoServicios.agregarCarrito(producto);
  }

}