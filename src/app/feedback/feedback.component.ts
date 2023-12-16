import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})

export class FeedbackComponent {
botao = 'Enviar!'
Sentimento = "";
api:string;
captcha:string;
Setsentimento(Sentimento:string){
this.Sentimento = Sentimento;
}
constructor(private http:HttpClient){
  this.api = 'https://api-email-99nb.onrender.com/api/enviar-email';
  this.captcha = '';
}

enviarEmail(texto: string) {

  const dadosParaEnviar = "Sentimento: "+ this.Sentimento + ", FeedBack:"+ texto;
  const Feedback = { texto: dadosParaEnviar };
  
  if(this.captcha != ''){
    this.botao = "Enviado!"
    this.http.post(this.api, Feedback)
    .subscribe(response => {
      console.log('E-mail enviado com sucesso!', response);
     
    }, error => {
      console.error('Erro ao enviar e-mail:', error);
    });
  }else{
    window.alert("Captcha não verificado");
  }
}

resolvido(captchaResponse:any){
this.captcha = captchaResponse;
console.log('Resolvido' + this.captcha);
}

}


