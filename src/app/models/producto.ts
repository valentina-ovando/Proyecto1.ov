export interface Producto{
    id:             number;
    nombre:         string;
    descripcion:    string;
    precio:         number;
    stock:          number;
    imagen:         string;
    categoria:      string;
    disponibilidad: boolean;
    cantidad?: number;
}


/*

// Ahora los productos vienen de la API, así que alcanza con describir su forma.
// Una interface no crea objetos: solo avisa qué campos tienen.
export interface Producto {
 id: number;
 nombre: string;
 descripcion: string;
 precio: number; // MySQL lo devuelve como texto ("1500.00"); sirve igual en
cuentas con Number(...)
 imagen: string; // solo el nombre del archivo (ej: "remera.jpg")
}
*/