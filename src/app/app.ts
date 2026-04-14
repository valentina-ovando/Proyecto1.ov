import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from "./compartidos/menu/menu";
import { Piedepagina } from "./compartidos/piedepagina/piedepagina";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Piedepagina],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Proyecto1.ov');
}
