import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';

@Component({
  providers: [ProductoService],
  selector: 'app-productos-list',
  imports: [],
  templateUrl: './productos-list.html',
  styleUrl: './productos-list.css'
})
export class ProductosList {
  public titulo: string;
  public productos: Producto[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService: ProductoService
  ) {
    this.titulo = 'Listado de Productos';
    this.productos = [];
  }

  ngOnInit() {
    this._productoService.getProductos().subscribe(
      (result:any) => {
        if(result.code != 200) {
          console.log(result);
        } else {
          console.log('entra');
          this.productos = result.data;
          console.log(this.productos);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
