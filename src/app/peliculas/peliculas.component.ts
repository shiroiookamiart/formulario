import { Component } from '@angular/core'; //se importa el angular

@Component({ //se agrega informacion de mi ciomponente peliculas
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})

export class PeliculasComponent { //creo mi componete usando typescript
  nombrePelicula = '';
  peliculas: any = [];

  agregarPelicula() { //metodo para el alacenamineto de mi pelicula
    this.peliculas.push(this.nombrePelicula);
    this.nombrePelicula = '';
  }
}
