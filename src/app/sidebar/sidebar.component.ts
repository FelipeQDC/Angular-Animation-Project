import { Component,Input,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent {
  constructor() {
    this.opcao = 1;
  }
  @Input() opcao: number;
  @Output() MudancaSelect = new EventEmitter<number>();
}
