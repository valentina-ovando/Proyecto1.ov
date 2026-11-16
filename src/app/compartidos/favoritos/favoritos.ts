import { Component, OnInit } from "@angular/core";
import { FavoritoService } from '../../servicios/favoritos-servicios';
@Component({ selector: "app-favoritos", templateUrl: "./favoritos.html"
})
export class FavoritosComponent implements OnInit {
 favoritos: any[] = [];
 constructor(private favoritoService: FavoritoService) {}
 ngOnInit(): void { this.cargar(); }
 cargar(): void {
 this.favoritoService.listar().subscribe(lista => (this.favoritos = lista));
 }
 quitar(idProducto: number): void {
 this.favoritoService.eliminar(idProducto).subscribe(() => this.cargar());
 }
}