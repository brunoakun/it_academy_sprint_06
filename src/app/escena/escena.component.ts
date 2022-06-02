import { Component, OnInit, Input } from '@angular/core';
import { IFrase } from '../home/home.component';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {
  @Input() saludo: string = '';   // decorate the property with @Input()
  @Input() frases: IFrase[] = [];    // Le pasamos los valores desde el padre 'home.ts'

  constructor() { }

  ngOnInit(): void {
  }

}
