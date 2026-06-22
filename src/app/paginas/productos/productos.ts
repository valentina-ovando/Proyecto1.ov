import { Producto } from '../../models/producto';
import { Component } from '@angular/core';


import { FavoritosService } from '../../services/favoritos-service';
import { CarritoService } from '../../services/carrito-service';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
   constructor(
    private favoritosService: FavoritosService,
    private carritoService: CarritoService
  ){}

  agregarFavorito(producto: Producto){
    this.favoritosService.agregarFavorito(producto);
  }

  agregarCarrito(producto: Producto){
    this.carritoService.agregarCarrito(producto);
  }



  Producto: Producto[] = [
    
    {
    id: 1,
    nombre: "LINER 00/1",
    descripcion: "Pincel de cerdas cortas ideal para detalles. Posee cerdas de 5mm de largo y 0,2 mm de ancho.",
    precio: 12500,
    stock: 20,
    imagen:"assets/pincel3.webp",
    categoria: "productos",
    disponibilidad: true
 },

 {
  id: 2,
  nombre: "LINER 02",
  descripcion: "Este liner está pensado para realizar líneas largas y gruesas. Posee cerdas de 15 mm de largo y 1 mm de ancho.",
  precio: 12500,
  stock: 20,
  imagen: "assets/pincel2.webp",
  categoria: "productos",
  disponibilidad: true
},
{
   id: 3,
  nombre: "LINER 01",
  descripcion: "Pincel de carga. Ideal para rellenos pequeños o delineados gruesos pero cortos. Posee cerdas de 7mm de largo y 1mm de ancho.",
  precio: 12500,
  stock: 20,
  imagen: "assets/pincel1.webp",
  categoria: "productos",
  disponibilidad: true
  
},

{
   id: 4,
  nombre: "PINCEL GEL BRUSH OVAL 02",
  descripcion: "Combina precisión y suavidad, y gracias a sus cerdas ovaladas son perfectos para trabajar en áreas pequeñas con control y delicadeza.",
  precio: 12500,
  stock: 10,
  imagen: "assets/pincelbrush.webp",
  categoria: "productos",
  disponibilidad: true
},
{
    id: 5,
  nombre: "LIMA ZEBRA GRIT 150/150",
  descripcion: "Las limas Pink Mask Professional Nail Files son herramientas manuales formadas por una superficie abrasiva, que se utiliza para desgastar o pulir.",
  precio: 3000,
  stock: 10,
  imagen: "assets/lima1.webp",
  categoria: "productos",
  disponibilidad: true
},
{
    id: 6,
  nombre: "LIMA ZEBRA GRIT 100/100",
  descripcion: "Las limas Pink Mask Professional Nail Files son herramientas manuales formadas por una superficie abrasiva, que se utiliza para desgastar o pulir.",
  precio: 3000,
  stock: 10,
  imagen: "assets/lima100.webp",
  categoria: "productos",
  disponibilidad: false
},
{
   id: 7,
  nombre: "LIMA ZEBRA GRIT 180/180",
  descripcion: "Las limas Pink Mask Professional Nail Files son herramientas manuales formadas por una superficie abrasiva, que se utiliza para desgastar o pulir.",
  precio: 3000,
  stock: 5,
  imagen: "assets/lima180.webp",
  categoria: "productos",
  disponibilidad: true
},
{
  id: 8,
  nombre: "LIMA ZEBRA GRIT 100/180 BUFFER",
  descripcion: "Pink Mask Pro Buffer es una lima doble fabricada con materia prima japonesa de alta calidad y una capa acolchada que se adapta a los desniveles de la uña.",
  precio: 3500,
  stock: 12,
  imagen: "assets/lima100180b.webp",
  categoria: "productos",
  disponibilidad: true
},
{
  id: 9,
  nombre: "LIMA ZEBRA GRIT 400/3000 SHINER",
  descripcion: "Pink Mask Pro Magic Shiner es una lima doble, ideal para dar un acabado final a tus uñas. ",
  precio: 3500,
  stock: 15,
  imagen: "assets/lima400sh.webp",
  categoria: "productos",
  disponibilidad: true
},
{
   id: 10,
  nombre: "CARBIDE BIT- 5-IN-1 CROSS CUT BIT",
  descripcion: "¡Una fresa, cinco usos! Una herramienta multifuncional de abrasividad media.  ",
  precio: 32500,
  stock: 12,
  imagen: "assets/fresa1.webp",
  categoria: "productos",
  disponibilidad: true
},
{
  
   id: 11,
  nombre: "CARBIDE BIT- 5-IN-1 CROSS CUT BIT",
  descripcion: "¡Una fresa, cinco usos! Una herramienta multifuncional de abrasividad suave. ",
  precio: 34500,
  stock: 12,
  imagen: "assets/fresa2.webp",
  categoria: "productos",
  disponibilidad: true
},
{
   id: 12,
  nombre: "CARBIDE BIT- 5-IN-1 CROSS CUT BIT",
  descripcion: "¡Una fresa, cinco usos! Una herramienta multifuncional de alta abrasividad. ",
  precio: 34500,
  stock: 12,
  imagen: "assets/fresa3.webp",
  categoria: "productos",
  disponibilidad: true
},
{
   id: 13,
  nombre: "5-IN-1 EXTRA LONG - FINE- RED",
  descripcion: "¡Una fresa, cinco usos! La fresa de carburo cinta roja es una herramienta multifuncional suave y de baja abrasividad. ",
  precio: 43300,
  stock: 20,
  imagen: "assets/fresa4.webp",
  categoria: "productos",
  disponibilidad: true
}

  ];
}
