import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListadopersonajesComponent } from './listadopersonajes/listadopersonajes.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'lista', component: ListadopersonajesComponent },
];
