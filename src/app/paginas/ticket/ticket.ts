// import { Component, OnInit, signal } from "@angular/core";
// import { ActivatedRoute } from "@angular/router"; // permite leer los datos de la URL actual
// import { TicketService } from "../../servicios/ticket-servicios";

// @Component({
//   selector: "app-ticket",
//   templateUrl: "./ticket.html"
// })
// export class TicketComponent implements OnInit {
//   ticket = signal<any>(null); // datos del ticket (null mientras carga)
//   urlPdf = signal(""); // link completo para descargar el PDF

//   constructor(private ruta: ActivatedRoute, private ticketService: TicketService) {}

//   ngOnInit(): void {
//     // Lee el ":id" de la ruta /paginas/ticket/:id y lo convierte a número
//     const id = Number(this.ruta.snapshot.paramMap.get("id"));

//     this.ticketService.ver(id).subscribe({
//       next: (t: any) => {
//         this.ticket.set(t);
//         // pdf_path viene de la base ("uploads/tickets/TCK-000001.pdf"): le sumamos la URL base
//         this.urlPdf.set(this.ticketService.baseArchivos + t.pdf_path);
//       },
//       error: err => console.error("Error al cargar el ticket:", err)
//     });
//   }
// }

import { Component, OnInit, signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TicketService } from "../../servicios/ticket-servicios";

@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.html",
  styleUrl: "./ticket.css"
})
export class TicketComponent implements OnInit {
  ticket = signal<any>(null);
  urlPdf = signal("");

  constructor(private ruta: ActivatedRoute, private ticketService: TicketService) {}

  ngOnInit(): void {
    const id = Number(this.ruta.snapshot.paramMap.get("id"));

    this.ticketService.ver(id).subscribe({
      next: (t: any) => {
        this.ticket.set(t);
        this.urlPdf.set(this.ticketService.baseArchivos + t.pdf_path);
      },
      error: err => console.error("Error al cargar el ticket:", err)
    });
  }
}
