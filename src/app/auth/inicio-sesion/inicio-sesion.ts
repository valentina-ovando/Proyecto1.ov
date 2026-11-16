// auth/inicio-sesion/inicio-sesion.component.ts
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../../servicios/auth-servicios";
import { Router } from "@angular/router";
@Component({
 selector: "app-inicio-sesion",
 imports: [FormsModule],
 templateUrl: "./inicio-sesion.html"
})
export class InicioSesionComponent {
 email = "";
 clave = "";
 error = "";
 constructor(private auth: AuthService, private router: Router) {}
 ingresar(): void {
 this.auth.login(this.email, this.clave).subscribe({
 next: () => {
 // login OK: si el usuario es admin va directo al panel, si no al inicio
 this.router.navigate([this.auth.esAdmin() ? "/paginas/admin" : "/inicio"]);
 },
 error: () => (this.error = "Email o contraseña incorrectos")
 });
 }
}