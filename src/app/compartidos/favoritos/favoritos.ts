import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { FavoritosServicios } from '../../servicios/favoritos-servicios';
import { CarritoServicios } from '../../servicios/carrito-servicios';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos implements OnInit {

  productosFavoritos: Producto[] = [];

  constructor(
    private favoritosServicios: FavoritosServicios,
    private carritoServicios: CarritoServicios
  ) {}

  ngOnInit(): void {
    this.productosFavoritos =
      this.favoritosServicios.obtenerFavoritos();
  }

  agregarCarrito(producto: Producto): void {
    this.carritoServicios.agregarCarrito(producto);
  }

  eliminar(id: number): void {

    this.favoritosServicios.eliminarFavorito(id);

    this.productosFavoritos =
      this.favoritosServicios.obtenerFavoritos();
  }

}