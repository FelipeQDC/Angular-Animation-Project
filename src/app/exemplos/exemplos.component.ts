import { Component } from '@angular/core';
@Component({
  selector: 'app-exemplos',
  templateUrl: './exemplos.component.html',
  styleUrls: ['./exemplos.component.css']
})
export class ExemplosComponent {
  ativado1 = '0';


ClassBola1(){
  if(this.ativado1!= '1'){
    this.ativado1 = '1';
  }
  else{
    this.ativado1 = '0';
  }
}
ClassBola2(){
  if(this.ativado1!= '2'){
    this.ativado1 = '2';
  }
  else{
    this.ativado1 = '0';
  }
}
ClassBola3(){
  if(this.ativado1!= '3'){
    this.ativado1 = '3';
  }
  else{
    this.ativado1 = '0';
  }
}
ClassBola4(){
  if(this.ativado1!= '4'){
    this.ativado1 = '4';
  }
  else{
    this.ativado1 = '0';
  }
}
}
