// import { Component, OnInit } from "@angular/core";
// import { FavoritoService } from '../../servicios/favoritos-servicios';
// @Component({ selector: "app-favoritos", templateUrl: "./favoritos.html"
// })
// export class FavoritosComponent implements OnInit {
//  favoritos: any[] = [];
//  constructor(private favoritoService: FavoritoService) {}
//  ngOnInit(): void { this.cargar(); }
//  cargar(): void {
//  this.favoritoService.listar().subscribe(lista => (this.favoritos = lista));
//  }
//  quitar(idProducto: number): void {
//  this.favoritoService.eliminar(idProducto).subscribe(() => this.cargar());
//  }
// }

import { Component, OnInit, signal } from "@angular/core";
import { Router } from "@angular/router";
import { FavoritoService } from "../../servicios/favoritos-servicios";

@Component({
  selector: "app-favoritos",
  templateUrl: "./favoritos.html",
  styleUrl: "./favoritos.css",
})
export class FavoritosComponent implements OnInit {
  favoritos = signal<any[]>([]);
  cargando = signal(true);
  error = signal("");

  constructor(
    private favoritoService: FavoritoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.favoritoService.listar().subscribe({
      next: (lista: any) => {
        this.favoritos.set(Array.isArray(lista) ? lista : lista?.data ?? []);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error("Error al cargar favoritos:", err);
        this.favoritos.set([]);
        this.cargando.set(false);
        if (err.status === 401) {
          this.router.navigate(["/auth/inicio-sesion"]);
        } else {
          this.error.set("No se pudieron cargar tus favoritos.");
        }
      },
    });
  }

  quitar(idProducto: number): void {
    this.favoritoService.eliminar(idProducto).subscribe({
      next: () => this.cargar(),
      error: (err) => console.error("Error al quitar favorito:", err),
    });
  }
}