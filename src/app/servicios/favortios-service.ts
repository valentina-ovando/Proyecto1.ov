import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  favoritos: Producto[] = [];

  constructor() { }

  // CREATE
  agregarFavorito(producto: Producto){

    const existe = this.favoritos.find(
      p => p.id === producto.id
    );

    if(!existe){
      this.favoritos.push({...producto});
    }
  }

  // READ
  obtenerFavoritos(){
    return this.favoritos;
  }

  // DELETE
  eliminarFavorito(id:number){
    this.favoritos = this.favoritos.filter(
      p => p.id !== id
    );
  }
}
