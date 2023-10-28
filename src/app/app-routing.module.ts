import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { TailwindComponent } from './tailwind/tailwind.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pickPlace', component: MapComponent },
  { path: 'tailwind', component: TailwindComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
