import { Component } from '@angular/core';
import { fadeState, Cor, Sidebar, myInsertRemoveTrigger} from './animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ //adiciona o campo animations 
    fadeState,
    Cor,
    Sidebar,
    myInsertRemoveTrigger,
  ]
  
})


export class AppComponent {
  estado = 'Esconder';
  texto = 'Mostrar';
  flutuar = 'nao';
  select =1;
  selectAntigo = 0;
  trocar(){
    this.estado = this.estado === 'Esconder' ? 'Mostrar' : 'Esconder';
    this.texto = this.texto === 'Mostrar' ? 'Esconder' : 'Mostrar';
  }

  flutuaranimation(){
    if(this.flutuar=='nao'){
      this.flutuar = 'sim';
    }
    else{
      this.flutuar = 'nao';
    }
  }

  selecionar(novoSelect: number){
    this.selectAntigo = this.select;
    this.select = novoSelect;
  }

  goToLink(url: string){
    window.open(url, "_blank");
}


}



