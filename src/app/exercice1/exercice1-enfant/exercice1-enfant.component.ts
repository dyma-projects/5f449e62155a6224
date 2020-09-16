import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  valeurCompteur: number = 0;
  @Output() changementCompteur= new EventEmitter();

  incrementer(){
    this.valeurCompteur++;
    this.changementCompteur.emit({
      value: this.valeurCompteur });
    }

  decrementer(){
    this.valeurCompteur--;
    this.changementCompteur.emit({
      value: this.valeurCompteur 
    });
  
  }

  @Input() item: number;
  constructor() { }

  ngOnInit() {
  }

}
