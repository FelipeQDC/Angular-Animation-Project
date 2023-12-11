import { Component } from '@angular/core';
@Component({
  selector: 'app-exemplos',
  templateUrl: './exemplos.component.html',
  styleUrls: ['./exemplos.component.css']
})
export class ExemplosComponent {
  ativado1 = 'nao';


ClassBola1(){
  if(this.ativado1=='nao'){
    this.ativado1 = 'sim';
  }
  else{
    this.ativado1 = 'nao';
  }
}
}
