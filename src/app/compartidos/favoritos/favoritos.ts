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

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FavoritoService } from "../../servicios/favoritos-servicios";

@Component({
  selector: "app-favoritos",
  templateUrl: "./favoritos.html",
  styleUrl: "./favoritos.css",
})
export class FavoritosComponent implements OnInit {
  favoritos: any[] = [];
  cargando = true;
  error = "";

  constructor(
    private favoritoService: FavoritoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.favoritoService.listar().subscribe({
      next: (lista: any[]) => {
        this.favoritos = lista;
        this.cargando = false;
      },
      error: (err) => {
        console.error("Error al cargar favoritos:", err);
        this.favoritos = [];
        this.cargando = false;
        if (err.status === 401) {
          this.router.navigate(["/auth/inicio-sesion"]);
        } else {
          this.error = "No se pudieron cargar tus favoritos.";
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