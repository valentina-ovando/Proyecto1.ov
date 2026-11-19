import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./compartidos/menu/menu";
import { Piedepagina } from "./compartidos/piedepagina/piedepagina";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, Piedepagina],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Proyecto1.ov');
}