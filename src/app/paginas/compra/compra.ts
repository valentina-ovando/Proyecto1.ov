import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CarritoService } from "../../servicios/carrito-servicios";
import { CompraService } from "../../servicios/compra-servicios";
import { TicketService } from "../../servicios/ticket-servicios";
@Component({ selector: "app-compra", templateUrl: "./compra.html" })
export class CompraComponent implements OnInit {
 items: any[] = []; // resumen: lo que hay en el carrito
 constructor(
 private carrito: CarritoService,
 private compraService: CompraService,
 private ticketService: TicketService,
 private router: Router
 ) {}
 ngOnInit(): void {
 this.carrito.ver().subscribe(lista => (this.items = lista));
 }
 total(): number {
 return this.items.reduce((suma, i) => suma + i.cantidad *
Number(i.precio_unitario), 0);
 }
 // Botón "Confirmar compra"
 finalizar(): void {
 this.compraService.finalizar().subscribe(respuesta => {
 this.ticketService.generar(respuesta.id_compra).subscribe(() => {
 this.router.navigate(["/paginas/ticket", respuesta.id_compra]);
 });
 });
 }
}