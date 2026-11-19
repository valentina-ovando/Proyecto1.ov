import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router"; // permite leer los datos de la URL actual
import { TicketService } from "../../servicios/ticket-servicios";
@Component({
 selector: "app-ticket",
 templateUrl: "./ticket.html"
})
export class TicketComponent implements OnInit {
 ticket: any = null; // datos del ticket (null mientras carga)
 urlPdf = ""; // link completo para descargar el PDF
 constructor(private ruta: ActivatedRoute, private ticketService: TicketService)
{}
 ngOnInit(): void {
 // Lee el ":id" de la ruta /paginas/ticket/:id y lo convierte a número
 const id = Number(this.ruta.snapshot.paramMap.get("id"));
 this.ticketService.ver(id).subscribe(t => {
 this.ticket = t;
 // pdf_path viene de la base ("uploads/tickets/TCK-000001.pdf"): le sumamos la URL base
 this.urlPdf = this.ticketService.baseArchivos + t.pdf_path;
 });
 }
}
