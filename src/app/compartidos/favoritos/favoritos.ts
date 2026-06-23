import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { FavoritosServicios } from '../../servicios/favoritos-servicios';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos implements OnInit {

  productosFavoritos: Producto[] = [];

  constructor(
    private favoritosServicios: FavoritosServicios
  ) {}

  ngOnInit(): void {
    this.productosFavoritos =
      this.favoritosServicios.obtenerFavoritos();
  }

  eliminar(id: number): void {

    this.favoritosServicios.eliminarFavorito(id);

    this.productosFavoritos =
      this.favoritosServicios.obtenerFavoritos();
  }

}