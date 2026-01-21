import { Injectable } from "@angular/core"; //Injectable para poder inyectar los servicios
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http'; //Para realizar peticiones
import 'rxjs/internal/operators/map'; //libreria para mapear respuestas http
import {map, Observable} from "rxjs"
import { Producto } from "../models/producto";
import { GLOBAL } from "./global";

@Injectable()
export class ProductoService {
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = GLOBAL.url;
    }

    getProductos() {
        return this._http.get(this.url+'productos').pipe(
            map(response => {return response})
        )
    }
}
