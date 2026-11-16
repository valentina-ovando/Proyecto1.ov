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

  // paginas/ofertas/ofertas.component.ts
ngOnInit(): void {
 this.productService.listar().subscribe(lista => {
 // copia la lista, la ordena de menor a mayor precio y se queda con los 6 primeros
 this.ofertas = [...lista].sort((a, b) => a.precio - b.precio).slice(0, 6);
 });
}


}