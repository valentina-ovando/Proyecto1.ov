import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class Favoritos {

  favoritos: Producto[] = [];

  agregarFavorito(producto: Producto) {
    this.favoritos.push(producto);
  }

  obtenerFavoritos() {
    return this.favoritos;
  }

  eliminarFavorito(id: number) {
    this.favoritos = this.favoritos.filter(p => p.id !== id);
  }
}