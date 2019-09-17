import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-canais',
  templateUrl: './canais.component.html',
  styleUrls: ['./canais.component.css']
})
export class CanaisComponent implements OnInit {
  showCanalItem = true;
  @Input() msgEmptyListCanais = false;

  canais = [
    'Conta Corrente',
    'Conta Poupança',
    'Cartões de Débito',
    'Cartões de Débito',
    'Cartões de Débito',
    'Chat e E-mail',
    'Caixas Eletrônicos',
    'Pessoa Jurídica',
    'Homebank',
    'Aplicativos',
    'Gestão de Gerêntes',
  ];
  
  constructor() { }

  ngOnInit() {
  }
    
  deleteMe(index){
    this.canais.splice(index, 1);

    if(this.canais.length === 0) {
      this.msgEmptyListCanais = true;
    } else {
      this.msgEmptyListCanais = false;
    }
  }

}
