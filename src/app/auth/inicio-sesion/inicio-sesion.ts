// auth/inicio-sesion/inicio-sesion.component.ts
// import { Component } from "@angular/core";
// import { FormsModule } from "@angular/forms";
// import { AuthService } from "../../servicios/auth-servicios";
// import { Router } from "@angular/router";
// @Component({
//  selector: "app-inicio-sesion",
//  imports: [FormsModule],
//  templateUrl: "./inicio-sesion.html"
// })
// export class InicioSesionComponent {
//  email = "";
//  clave = "";
//  error = "";
//  constructor(private auth: AuthService, private router: Router) {}
//  ingresar(): void {
//  this.auth.login(this.email, this.clave).subscribe({
//  next: () => {
//  // login OK: si el usuario es admin va directo al panel, si no al inicio
//  this.router.navigate([this.auth.esAdmin() ? "/paginas/admin" : "/inicio"]);
//  },
//  error: () => (this.error = "Email o contraseña incorrectos")
//  });
//  }
// }

// auth/inicio-sesion/inicio-sesion.ts
// import { Component } from "@angular/core";
// import { FormsModule } from "@angular/forms";
// import { AuthService } from "../../servicios/auth-servicios";
// import { Router } from "@angular/router";

// @Component({
//   selector: "app-inicio-sesion",
//   imports: [FormsModule],
//   templateUrl: "./inicio-sesion.html",
//   styleUrl: "./inicio-sesion.css"
// })
// export class InicioSesionComponent {
//   email = "";
//   clave = "";
//   error = "";

//   constructor(private auth: AuthService, private router: Router) {}

//   ingresar(): void {
//     this.auth.login(this.email, this.clave).subscribe({
//       next: () => {
//         // login OK: si el usuario es admin va directo al panel, si no al inicio
//         this.router.navigate([this.auth.esAdmin() ? "/paginas/admin" : "/inicio"]);
//       },
//       error: (err) => {
//         console.error("ERROR LOGIN:", err);
//         this.error = "Email o contraseña incorrectos";
//       }
//     });
//   }
// }

// auth/inicio-sesion/inicio-sesion.ts
import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../../servicios/auth-servicios";
import { Router } from "@angular/router";

@Component({
  selector: "app-inicio-sesion",
  imports: [FormsModule],
  templateUrl: "./inicio-sesion.html",
  styleUrl: "./inicio-sesion.css"
})
export class InicioSesionComponent {
  email = "";
  clave = "";
  error = signal("");

  constructor(private auth: AuthService, private router: Router) {}

  ingresar(): void {
    console.log("1) CLICK EN INGRESAR", this.email);
    this.error.set("");

    this.auth.login(this.email, this.clave).subscribe({
      next: (res) => {
        console.log("2) LOGIN RESPONDIÓ OK:", res);
        console.log("3) TOKEN GUARDADO:", localStorage.getItem("token"));
        // login OK: si el usuario es admin va directo al panel, si no al inicio
        this.router.navigate([this.auth.esAdmin() ? "/paginas/admin" : "/inicio"]);
      },
      error: (err) => {
        console.error("2) ERROR LOGIN:", err);
        this.error.set("Email o contraseña incorrectos");
      }
    });
  }
}