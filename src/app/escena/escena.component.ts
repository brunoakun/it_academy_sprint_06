import { Component, OnInit, Input } from '@angular/core';
import { IFrase } from '../home/home.component';    // Importamos el interface desde el padre (home.ts)

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {
  @Input() saludo: string = '';       // decorate the property with @Input()
  @Input() frases: IFrase[] = [];     // Es de tipo IFrase, interface definido desde el padre 'home.ts'

  clase: string = 'normal';
  currentSentence: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  anterior(): void {
    if (this.currentSentence > 1) this.currentSentence--;
  }

  siguiente(): void {
    if (this.currentSentence < this.frases.length) this.currentSentence++;
  }

}
