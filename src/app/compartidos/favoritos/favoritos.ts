import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { FavoritosService } from '../../services/favoritos.service';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos implements OnInit {

  productosFavoritos: Producto[] = [];

  constructor(
    private favoritosService: FavoritosService
  ) {}

  ngOnInit(): void {
    this.productosFavoritos =
      this.favoritosService.obtenerFavoritos();
  }

  eliminar(id: number) {

    this.favoritosService.eliminarFavorito(id);

    this.productosFavoritos =
      this.favoritosService.obtenerFavoritos();
  }

}
