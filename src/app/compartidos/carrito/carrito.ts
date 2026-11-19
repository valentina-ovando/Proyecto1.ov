// import { Component, OnInit } from "@angular/core";
// import { Router } from "@angular/router";
// import { CarritoService } from "../../servicios/carrito-servicios";

// @Component({ selector: "app-carrito", templateUrl: "./carrito.html" })
// export class CarritoComponent implements OnInit {
//   items: any[] = [];

//   constructor(private carrito: CarritoService, private router: Router) {}

//   ngOnInit(): void {
//     this.cargar();
//   }

//   cargar(): void {
//     this.carrito.ver().subscribe((lista: any[]) => (this.items = lista));
//   }

//   total(): number {
//     // precio_unitario llega como texto ("1600.00"): Number() lo convierte para poder multiplicar
//     return this.items.reduce(
//       (suma, i) => suma + i.cantidad * Number(i.precio_unitario),
//       0
//     );
//   }

//   cambiarCantidad(item: any, cantidad: number): void {
//     if (cantidad < 1) return;
//     this.carrito.actualizar(item.id_producto, cantidad).subscribe(() => this.cargar());
//   }

//   quitar(idProducto: number): void {
//     this.carrito.eliminar(idProducto).subscribe(() => this.cargar());
//   }

//   vaciar(): void {
//     this.carrito.vaciar().subscribe(() => this.cargar());
//   }

//   // Botón "Finalizar compra": lleva a la página con el resumen y la confirmación
//   finalizarCompra(): void {
//     this.router.navigate(["/paginas/compra"]);
//   }
// }


import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CarritoService } from "../../servicios/carrito-servicios";

@Component({ selector: "app-carrito", templateUrl: "./carrito.html" })
export class CarritoComponent implements OnInit {
  items: any[] = [];
  cargando = true;

  constructor(private carrito: CarritoService, private router: Router) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.carrito.ver().subscribe((lista: any[]) => {
      this.items = lista;
      this.cargando = false;
    });
  }

  total(): number {
    // precio_unitario y cantidad pueden llegar como texto: Number() las convierte
    return this.items.reduce(
      (suma, i) => suma + Number(i.cantidad) * Number(i.precio_unitario),
      0
    );
  }

  subtotal(item: any): number {
    return Number(item.cantidad) * Number(item.precio_unitario);
  }

  cambiarCantidad(item: any, nueva: number): void {
    const cantidad = Number(nueva);
    if (cantidad < 1) return;
    this.carrito.actualizar(item.id_producto, cantidad).subscribe(() => this.cargar());
  }

  sumar(item: any): void {
    this.cambiarCantidad(item, Number(item.cantidad) + 1);
  }

  restar(item: any): void {
    this.cambiarCantidad(item, Number(item.cantidad) - 1);
  }

  quitar(idProducto: number): void {
    this.carrito.eliminar(idProducto).subscribe(() => this.cargar());
  }

  vaciar(): void {
    this.carrito.vaciar().subscribe(() => this.cargar());
  }

  // Botón "Finalizar compra": lleva a la página con el resumen y la confirmación
  finalizarCompra(): void {
    this.router.navigate(["/paginas/compra"]);
  }
}