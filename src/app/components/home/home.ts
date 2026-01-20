import { Component } from '@angular/core';

@Component({
  selector: 'home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public titulo: string;

  constructor() {
    this.titulo = 'Webapp de productos con Angular 21';
  }

  ngOnInit() {
    console.log('Se ha cargado el componente home.ts');
  }
}
