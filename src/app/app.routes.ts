import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './components/home/home';
import { Error } from './components/error/error';
import { ProductosList } from './components/productos-list/productos-list';
import { ProductoAdd } from './components/producto-add/producto-add';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'home', component: Home},
    {path: 'error', component: Error},
    {path: 'productos', component: ProductosList},
    {path: 'crear-producto', component: ProductoAdd},
    {path: '**', component: Error} //Siempre debe ser la ultima de todas
];

export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders<NgModule> = RouterModule.forRoot(routes);
