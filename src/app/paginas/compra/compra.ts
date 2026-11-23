// import { Component, OnInit, signal } from "@angular/core";
// import { Router } from "@angular/router";
// import { CarritoService } from "../../servicios/carrito-servicios";
// import { CompraService } from "../../servicios/compra-servicios";
// import { TicketService } from "../../servicios/ticket-servicios";

// @Component({ selector: "app-compra", templateUrl: "./compra.html" })
// export class CompraComponent implements OnInit {
//   items = signal<any[]>([]); // resumen: lo que hay en el carrito

//   constructor(
//     private carrito: CarritoService,
//     private compraService: CompraService,
//     private ticketService: TicketService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.carrito.ver().subscribe({
//       next: (lista: any) => this.items.set(Array.isArray(lista) ? lista : lista?.data ?? []),
//       error: err => console.error("Error al cargar el resumen:", err)
//     });
//   }

//   total(): number {
//     return this.items().reduce((suma, i) => suma + i.cantidad * Number(i.precio_unitario), 0);
//   }

//   // Botón "Confirmar compra"
//   finalizar(): void {
//     this.compraService.finalizar().subscribe({
//       next: respuesta => {
//         this.ticketService.generar(respuesta.id_compra).subscribe({
//           next: () => this.router.navigate(["/paginas/ticket", respuesta.id_compra]),
//           error: err => {
//             console.error("Error al generar ticket:", err);
//             this.router.navigate(["/paginas/compras"]);
//           }
//         });
//       },
//       error: err => console.error("Error al finalizar:", err)
//     });
//   }
// }


import { Component, OnInit, signal } from "@angular/core";
import { Router } from "@angular/router";
import { CarritoService } from "../../servicios/carrito-servicios";
import { CompraService } from "../../servicios/compra-servicios";
import { TicketService } from "../../servicios/ticket-servicios";

@Component({
  selector: "app-compra",
  templateUrl: "./compra.html",
  styleUrl: "./compra.css"
})
export class CompraComponent implements OnInit {
  items = signal<any[]>([]); // resumen: lo que hay en el carrito

  constructor(
    private carrito: CarritoService,
    private compraService: CompraService,
    private ticketService: TicketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carrito.ver().subscribe({
      next: (lista: any) => this.items.set(Array.isArray(lista) ? lista : lista?.data ?? []),
      error: err => console.error("Error al cargar el resumen:", err)
    });
  }

  total(): number {
    return this.items().reduce((suma, i) => suma + i.cantidad * Number(i.precio_unitario), 0);
  }

  // Botón "Confirmar compra"
  finalizar(): void {
    this.compraService.finalizar().subscribe({
      next: respuesta => {
        this.ticketService.generar(respuesta.id_compra).subscribe({
          next: () => this.router.navigate(["/paginas/ticket", respuesta.id_compra]),
          error: err => {
            console.error("Error al generar ticket:", err);
            this.router.navigate(["/paginas/compras"]);
          }
        });
      },
      error: err => console.error("Error al finalizar:", err)
    });
  }
}