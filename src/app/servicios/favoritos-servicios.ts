 import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class FavoritosServicios {

  favoritos: Producto[] = [];

  constructor() { }

  agregarFavorito(producto: Producto){

    const existe = this.favoritos.find(
      p => p.id === producto.id
    );

    if(!existe){
      this.favoritos.push({...producto});
    }
  }

  obtenerFavoritos(){
    return this.favoritos;
  }

  eliminarFavorito(id:number){
    this.favoritos = this.favoritos.filter(
      p => p.id !== id
    );
  }
}