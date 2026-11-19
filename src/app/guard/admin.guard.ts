import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../servicios/auth-servicios";
// Se ejecuta antes de entrar a la ruta. Si devuelve true deja pasar; si devuelve false, bloquea.
export const adminGuard: CanActivateFn = () => {
 const auth = inject(AuthService);
 const router = inject(Router);
 if (auth.estaLogueado() && auth.esAdmin()) {
 return true; // es admin: puede entrar
 }
 router.navigate(["/inicio"]); // no tiene permiso: lo mandamos al inicio
 return false;
};
