// import { Component, OnInit } from "@angular/core";
// import { RouterLink } from "@angular/router";
// import { CompraService } from "../../servicios/compra-servicios";
// @Component({ selector: "app-compras", imports: [RouterLink], templateUrl:"./compras.html" })
// export class ComprasComponent implements OnInit {
//  compras: any[] = [];
//  constructor(private compraService: CompraService) {}
//  ngOnInit(): void {
//  this.compraService.historial().subscribe(lista => (this.compras = lista));
//  }
// }



// import { Component, OnInit, signal } from "@angular/core";
// import { RouterLink } from "@angular/router";
// import { CompraService } from "../../servicios/compra-servicios";

// @Component({ selector: "app-compras", imports: [RouterLink], templateUrl: "./compras.html" })
// export class ComprasComponent implements OnInit {
//   compras = signal<any[]>([]);

//   constructor(private compraService: CompraService) {}

//   ngOnInit(): void {
//     this.compraService.historial().subscribe(lista => this.compras.set(lista));
//   }
// }

// import { Component, OnInit, signal } from "@angular/core";
// import { RouterLink } from "@angular/router";
// import { CompraService } from "../../servicios/compra-servicios";

// @Component({
//   selector: "app-compras",
//   imports: [RouterLink],
//   templateUrl: "./compras.html"
// })
// export class ComprasComponent implements OnInit {
//   compras = signal<any[]>([]);

//   constructor(private compraService: CompraService) {}

//   ngOnInit(): void {
//     console.log("ComprasComponent cargado");
//     this.compraService.historial().subscribe({
//       next: lista => {
//         console.log("Respuesta historial:", lista);
//         this.compras.set(lista);
//       },
//       error: err => console.error("Error historial:", err)
//     });
//   }
// }



import { Component, OnInit, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CompraService } from "../../servicios/compra-servicios";

@Component({
  selector: "app-compras",
  imports: [RouterLink],
  templateUrl: "./compras.html",
  styleUrl: "./compras.css"
})
export class ComprasComponent implements OnInit {
  compras = signal<any[]>([]);

  constructor(private compraService: CompraService) {}

  ngOnInit(): void {
    this.compraService.historial().subscribe({
      next: lista => this.compras.set(lista),
      error: err => console.error("Error al cargar las compras:", err)
    });
  }
}