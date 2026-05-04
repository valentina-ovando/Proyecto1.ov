import { Producto } from '../../models/producto';
import { Component } from '@angular/core';


@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  Producto: Producto[]=[
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
  nombre: "REPUJADOR DE CUTICULAS",
  descripcion: "Combina dos funciones en una sola herramienta: un repujador con curvatura perfecta.",
  precio: 13400,
  stock: 10,
  imagen: "assets/repujador.webp",
  categoria: "productos",
  disponibilidad: false
},
{
   id: 5,
  nombre: "ALICATE",
  descripcion: "Diseñado para abarcar una mayor superficie en cada corte, este alicate es ideal para técnicas que buscan rapidez.",
  precio: 8000,
  stock: 8,
  imagen: "assets/alicate.webp",
  categoria: "productos",
  disponibilidad: true
},
{
    id: 6,
  nombre: "LIMA ZEBRA GRIT 150/150",
  descripcion: "Las limas Pink Mask Professional Nail Files son herramientas manuales formadas por una superficie abrasiva, que se utiliza para desgastar o pulir.",
  precio: 3000,
  stock: 10,
  imagen: "assets/lima1.webp",
  categoria: "productos",
  disponibilidad: true
}



    
  ]
}
