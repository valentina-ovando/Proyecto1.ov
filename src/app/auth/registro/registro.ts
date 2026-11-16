import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../servicios/auth-servicios";
@Component({ selector: "app-registro", imports: [FormsModule], templateUrl:
"./registro.html" })
export class RegistroComponent {
 nombre = ""; email = ""; clave = ""; error = "";
 constructor(private auth: AuthService, private router: Router) {}
 registrar(): void {
 // la API espera la clave "contraseña" en el JSON; la variable del componente se llama clave
 this.auth.registro({ nombre: this.nombre, email: this.email, contraseña:
this.clave }).subscribe({
 next: () => this.router.navigate(["/auth/inicio-sesion"]),
 error: (e) => (this.error = e.error?.error ?? "No se pudo registrar")
 });
 }
}
