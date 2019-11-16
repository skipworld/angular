import { Component, OnInit } from '@angular/core';
import {Pelicula} from './../interface/pelicula';

const PELICULAS: Pelicula[] = [
    {id_pelicula:1,titulo:'La historia sin fin',director:'Pepito',genero:'Aventura'},
    {id_pelicula:2,titulo:'Avengers',director:'Marvel',genero:'Accion'},
    {id_pelicula:3,titulo:'Avion Presidencial',director:'SomeOne',genero:'Accion'}
];

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  peliculas:Pelicula[] = PELICULAS;
  saludar:boolean      = false;

  constructor() { }

  ngOnInit() {
  }

  setearSaludo(){
    this.saludar = this.saludar ? false : true;
  }

}
