import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { from } from 'rxjs';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-producto-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './producto-add.html',
  styleUrl: './producto-add.css',
  providers: [ProductoService]
})
export class ProductoAdd {
  public titulo : string;
  public producto : Producto;
  
  constructor() {
    this.titulo = 'Crear un nuevo producto';
    this.producto = new Producto(0, '', '', 0, '');
  }

  ngOnInit() {
    console.log('Producto-add.ts cargado.');
  }

  onSubmit() {
    console.log(this.producto);
  }
}
