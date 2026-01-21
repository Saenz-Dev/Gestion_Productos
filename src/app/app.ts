import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { Home } from "./components/home/home";
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Productos Angular';
  public header_color: string;
  
  constructor() {
    this.header_color = GLOBAL.header_color;
  }
}
