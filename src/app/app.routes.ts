import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './components/home/home';
import { Error } from './components/error/error';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'home', component: Home},
    {path: 'error', component: Error},
    {path: '**', component: Error} //Siempre debe ser la ultima de todas
];

export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders<NgModule> = RouterModule.forRoot(routes);
