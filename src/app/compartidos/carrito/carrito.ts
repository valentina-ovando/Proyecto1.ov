import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CarritoService } from "../../servicios/carrito.service";
@Component({ selector: "app-carrito", templateUrl: "./carrito.component.html" })
export class CarritoComponent implements OnInit {
 items: any[] = [];
 constructor(private carrito: CarritoService, private router: Router) {}
 ngOnInit(): void { this.cargar(); }
 cargar(): void {
 this.carrito.ver().subscribe(lista => (this.items = lista));
 }
 total(): number {
 // precio_unitario llega como texto ("1600.00"): Number() lo convierte para
poder multiplicar
 return this.items.reduce((suma, i) => suma + i.cantidad *
Number(i.precio_unitario), 0);
 }
 cambiarCantidad(item: any, cantidad: number): void {
 if (cantidad < 1) return;
 this.carrito.actualizar(item.id_producto, cantidad).subscribe(() =>
this.cargar());
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