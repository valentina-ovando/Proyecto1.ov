import { Component, OnInit } from "@angular/core";
import { Producto } from "../../models/producto";
import { ProductService } from "../../servicios/productos-servicios";
import { CarritoService } from "../../servicios/carrito-servicios";

@Component({
  selector: "app-ofertas",
  imports: [],
  templateUrl: "./ofertas.html",
  styleUrl: "./ofertas.css"
})
export class Ofertas implements OnInit {
  ofertas: Producto[] = [];

  constructor(
    private productService: ProductService,
    private carrito: CarritoService
  ) {}

  ngOnInit(): void {
    this.productService.listar().subscribe((lista: Producto[]) => {
      // copia la lista, la ordena de menor a mayor precio y se queda con los 6 primeros
      this.ofertas = [...lista].sort((a, b) => a.precio - b.precio).slice(0, 6);
    });
  }

  agregarCarrito(producto: Producto): void {
    this.carrito
      .agregar(producto.id, 1)
      .subscribe(() => alert("Agregado al carrito"));
  }
}