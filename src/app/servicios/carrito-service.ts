import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {

  carrito: any[] = [];

  constructor() {}

  agregarCarrito(producto: Producto){

    const existe = this.carrito.find(
      p => p.id === producto.id
    );

    if(existe){
      existe.cantidad++;
    }else{
      this.carrito.push({
        ...producto,
        cantidad: 1
      });
    }
  }

  obtenerCarrito(){
    return this.carrito;
  }

  aumentarCantidad(id:number){

    const producto =
    this.carrito.find(p => p.id === id);

    if(producto){
      producto.cantidad++;
    }
  }

  disminuirCantidad(id:number){

    const producto =
    this.carrito.find(p => p.id === id);

    if(producto && producto.cantidad > 1){
      producto.cantidad--;
    }
  }

  eliminarProducto(id:number){

    this.carrito =
    this.carrito.filter(
      p => p.id !== id
    );
  }

}