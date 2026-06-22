import { Routes } from '@angular/router';
import { Productos } from './paginas/productos/productos';
import { Producto } from './models/producto';
import { Inicio } from './paginas/inicio/inicio';
import { Ofertas } from './paginas/ofertas/ofertas';
import { Contacto } from './paginas/contacto/contacto';
import { Favoritos } from './compartidos/favoritos/favoritos';
import { Registro } from './auth/registro/registro';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Carrito } from './compartidos/carrito/carrito';
import { Cursos } from './paginas/cursos/cursos';


export const routes: Routes = [

    {path: '', redirectTo: 'inicio', pathMatch: 'full'},

    {path: 'inicio', component: Inicio},
    {path: 'productos', component: Productos},
    {path: 'ofertas', component: Ofertas},
    {path: 'contacto', component: Contacto},
    {path: 'favoritos', component: Favoritos},
    {path: 'registro', component: Registro},
    {path: 'inicio-sesion', component: InicioSesion},
    {path: 'carrito', component: Carrito},
    {path: 'cursos', component: Cursos},
    

    //captura cualquier URL no definida (404)
    {path: '**', redirectTo: 'inicio'},




];
