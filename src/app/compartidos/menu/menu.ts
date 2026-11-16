import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router"; // RouterLink permite usar routerLink en el HTML
import { AuthService } from "../../servicios/auth-servicios";
@Component({
 selector: "app-nav",
 imports: [RouterLink],
 templateUrl: "./menu.html"
})
export class NavComponent {
 // "public" para poder usar auth.esAdmin() directamente desde el HTML
 constructor(public auth: AuthService, private router: Router) {}
 // Botón Salir: cierra la sesión y vuelve a la pantalla de login
 salir(): void {
 this.auth.logout();
 this.router.navigate(["/auth/inicio-sesion"]);
 }
}