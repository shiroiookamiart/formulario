import { Component } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})

export class PeliculasComponent {
  nombrePelicula = '';
  peliculas: any = [];

  agregarPelicula() {
    this.peliculas.push(this.nombrePelicula);
    this.nombrePelicula = '';
  }
}
