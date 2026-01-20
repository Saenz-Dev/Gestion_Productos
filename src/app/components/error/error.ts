import { Component } from "@angular/core";

@Component({
  selector: 'error',
  templateUrl: './error.html',
  styleUrl: './error.css',
  imports: []
})

export class Error {
  public titulo: string;

  constructor() {
    this.titulo = 'Error!!! Página no encontrada.'
  }

  ngOnInit() {
    console.log('Componente Error.ts cargado.');
  }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-error',
//   imports: [],
//   templateUrl: './error.html',
//   styleUrl: './error.css',
// })
// export class Error {

// }
