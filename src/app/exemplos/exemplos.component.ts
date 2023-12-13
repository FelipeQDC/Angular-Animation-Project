import { Component } from '@angular/core';
@Component({
  selector: 'app-exemplos',
  templateUrl: './exemplos.component.html',
  styleUrls: ['./exemplos.component.css']
})
export class ExemplosComponent {
  ativado1 = '0';
  texto = 'Copiar código';

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

CopiarTexto1(){
  const texto = document.getElementsByClassName('1');
  navigator.clipboard.writeText("@keyframes Pula{ 0% { top: 25%; transform:scaleY(100%); } 50% { top: 75%; transform:scaleY(65%); } 100%{ top: 50%; transform:scaleY(100%); } }");
}
CopiarTexto2(){
  navigator.clipboard.writeText("@keyframes Gira{ 0% { top: 50%; transform: rotate(360deg) translateY(-100px) rotate(-360deg); } 100% { top: 50%; transform: rotate(0deg) translateY(-100px) rotate(0deg); } }");
}
CopiarTexto3(){
  navigator.clipboard.writeText("@keyframes Slide { 0% { -webkit-transform: translateY(0) rotateX(0) scale(1); transform: translateY(0) rotateX(0) scale(1); -webkit-transform-origin: 50% 1400px; transform-origin: 50% 1400px; opacity: 1; } 40% { -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0); transform: translateY(-600px) rotateX(-30deg) scale(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; opacity: 1; } 50%{ -webkit-transform: translateY(400px) rotateX(30deg) scale(0); transform: translateY(400px) rotateX(30deg) scale(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; opacity: 0; } 80%{ webkit-transform: translateY(0) rotateX(0) scale(1); transform: translateY(0) rotateX(0) scale(1); -webkit-transform-origin: 50% -1400px; transform-origin: 50% -1400px; opacity: 1; } }");
}
CopiarTexto4(){
  navigator.clipboard.writeText("@keyframes formas{ 0% { height: 70px; width: 70px; border-radius: 50%; } 20% { height: 170px; width:170px; border-radius: 5%; } 40%{ height: 70px; width:70px; border-radius: 30%; } 60%{ height: 170px; width:50px; border-radius: 10%; } 60%{ height: 170px; width:50px; border-radius: 10%; transform: rotate(359deg); } 80%{ height: 50px; width:170px; border-radius: 10%; } 100%{ height: 70px; width: 70px; border-radius: 50%; } }");
}

}
