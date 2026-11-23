// paginas/productos/productos.ts
import { Component, OnInit, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ProductService } from "../../servicios/productos-servicios";
import { CarritoService } from "../../servicios/carrito-servicios";
import { FavoritoService } from "../../servicios/favoritos-servicios";
import { Producto } from "../../models/producto";

@Component({
  selector: "app-productos",
  imports: [FormsModule],
  templateUrl: "./productos.html",
  styleUrl: "./productos.css" // <-- esto era lo que faltaba
})
export class ProductosComponent implements OnInit {
  productos = signal<Producto[]>([]);
  buscar = "";

  constructor(
    private productService: ProductService,
    private carrito: CarritoService,
    private favoritoService: FavoritoService
  ) {}

  ngOnInit(): void {
    this.cargar(); // al abrir la página, trae todo
  }

  cargar(): void {
    this.productService.listar(this.buscar).subscribe({
      next: (lista: any) => {
        this.productos.set(Array.isArray(lista) ? lista : lista.data ?? []);
      },
      error: (err) => console.error("ERROR AL CARGAR:", err)
    });
  }

  agregar(idProducto: number): void {
    this.carrito.agregar(idProducto, 1).subscribe({
      next: () => alert("Agregado al carrito"),
      error: (err) => {
        console.error("ERROR AL AGREGAR AL CARRITO:", err);
        if (err.status === 401) {
          alert("Tenés que iniciar sesión para agregar al carrito");
        }
      }
    });
  }

  favorito(idProducto: number): void {
    this.favoritoService.agregar(idProducto).subscribe({
      next: () => alert("Agregado a favoritos"),
      error: (err) => {
        console.error("ERROR AL AGREGAR A FAVORITOS:", err);
        if (err.status === 401) {
          alert("Tenés que iniciar sesión para guardar favoritos");
        }
      }
    });
  }
}