import { Component, OnInit } from '@angular/core';
export interface IFrase {   // Definir la Interface para frase
  id: number;
  texto: string;
  img: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  // Propiedades
  saludoHome = 'valor desde el padre';
  primeravez: boolean = true;

  frasesHome = [
    {
      "id": 1,
      "texto": "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
      "img":"1.jpg"
    },
    {
      "id": 2,
      "texto": "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes",
      "img":"2.jpg"
    },
    {
      "id": 3,
      "texto": "L'heroi va decidir travessar la porta que el portava a casa",
      "img":"3.jpg"
    },
    {
      "id": 4,
      "texto": "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...",
      "img":"4.jpg"
    }
  ];

  // Constructor
  constructor() { }

  // Métodos
  ngOnInit(): void {
    this.primeravez = true;
  }

  primeraVez(): void {
    this.primeravez = false;
  }
}

