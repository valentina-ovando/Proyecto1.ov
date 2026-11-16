// paginas/productos/productos.component.ts
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ProductService } from "../../servicios/productos-servicios";
import { CarritoService } from "../../servicios/carrito-servicios";
import { FavoritoServicios } from "../../servicios/favoritos-servicios";
import { Producto } from "../../models/producto";
@Component({
 selector: "app-productos",
 imports: [FormsModule],
 templateUrl: "./productos.html"
})
export class ProductosComponent implements OnInit {
 productos: Producto[] = [];
 buscar = "";
 constructor(private productService: ProductService, private carrito:
CarritoService, private favoritoService: FavoritoService) {}
 ngOnInit(): void {
 this.cargar(); // al abrir la página, trae todo
 }
 cargar(): void {
 this.productService.listar(this.buscar).subscribe(lista => (this.productos =
lista));
 }
 agregar(idProducto: number): void {
 this.carrito.agregar(idProducto, 1).subscribe(() => alert("Agregado al
carrito"));
 }
 favorito(idProducto: number): void {
 this.favoritoService.agregar(idProducto).subscribe(() => alert("Agregado a
favoritos"));
 }
}