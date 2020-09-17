import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  
  constructor() { 
  }
    ngOnInit() { 
  } 
  // Bonjour voici mon code qui ne fonctionne pas, je ne comprends pas pourquoi el n'est pas reconnu et pourquoi
  // il y a une erreur sur le console.log, merci par avance de votre réponse
  
  // @ViewChild('f') public el: ElementRef;
  // public valeur: string = el.nativeElement.value;
 
  // console.log(valeur);

}
