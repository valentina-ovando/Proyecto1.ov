// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
// import { Observable } from "rxjs";
// @Injectable({ providedIn: "root" })
// export class CarritoService {
//  private apiUrl = "http://localhost/api_proyecto/public/carrito";
//  constructor(private http: HttpClient) {}
//  // El token lo agrega el interceptor: acá no hace falta tocarlo.
//  ver(): Observable<any[]> {
//  return this.http.get<any[]>(this.apiUrl);
//  }
//  agregar(idProducto: number, cantidad: number): Observable<any> {
//  return this.http.post(`${this.apiUrl}/agregar`, { id_producto: idProducto,
// cantidad });
//  }
//  actualizar(idProducto: number, cantidad: number): Observable<any> {
//  return this.http.put(`${this.apiUrl}/actualizar/${idProducto}`, { cantidad });
//  }
//  eliminar(idProducto: number): Observable<any> {
//  return this.http.delete(`${this.apiUrl}/eliminar/${idProducto}`);
//  }
//  vaciar(): Observable<any> {
//  return this.http.delete(`${this.apiUrl}/vaciar`);
//  }
// }


import { Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({ providedIn: "root" })
export class CarritoService {

  private apiUrl = "http://localhost/api_proyecto/public/carrito";

  // Cantidad total de productos del carrito
  cantidad = signal(0);

  constructor(private http: HttpClient) {}

  // VER CARRITO
  ver(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap(items => {
        this.cantidad.set(
          items.reduce(
            (total, item) => total + Number(item.cantidad ?? 1),
            0
          )
        );
      })
    );
  }

  // AGREGAR PRODUCTO
  agregar(idProducto: number, cantidad: number): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/agregar`, {
        id_producto: idProducto,
        cantidad: cantidad
      })
      .pipe(
        tap(() => this.ver().subscribe())
      );
  }

  // ACTUALIZAR CANTIDAD
  actualizar(idProducto: number, cantidad: number): Observable<any> {
    return this.http
      .put(`${this.apiUrl}/actualizar/${idProducto}`, {
        cantidad: cantidad
      })
      .pipe(
        tap(() => this.ver().subscribe())
      );
  }

  // ELIMINAR PRODUCTO
  eliminar(idProducto: number): Observable<any> {
    return this.http
      .delete(`${this.apiUrl}/eliminar/${idProducto}`)
      .pipe(
        tap(() => this.ver().subscribe())
      );
  }

  // VACIAR CARRITO
  vaciar(): Observable<any> {
    return this.http
      .delete(`${this.apiUrl}/vaciar`)
      .pipe(
        tap(() => this.cantidad.set(0))
      );
  }

}
