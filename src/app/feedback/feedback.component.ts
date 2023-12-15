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
Setsentimento(Sentimento:string){
this.Sentimento = Sentimento;
}
constructor(private http:HttpClient){
  this.api = 'https://api-email-99nb.onrender.com/api/enviar-email';
}

enviarEmail(texto: string) {
  const dadosParaEnviar = "Sentimento: "+ this.Sentimento + ", FeedBack:"+ texto;
  const Feedback = { texto: dadosParaEnviar };

  this.http.post(this.api, Feedback)
    .subscribe(response => {
      console.log('E-mail enviado com sucesso!', response);
    }, error => {
      console.error('Erro ao enviar e-mail:', error);
    });
}

}


