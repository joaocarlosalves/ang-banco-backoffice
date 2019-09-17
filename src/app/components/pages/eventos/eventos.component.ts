import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  showEventoItem = true;
  @Input() msgEmptyListEventos = false;

  eventos = [
    'Evento 1',
    'Evento 2',
    'Evento 3',
    'Evento 4'
  ];
  
  dataEventos = [
    '22/11/2019',
    '12/02/2019',
    '09/07/2019',
    '26/02/2019'
  ];
  
  constructor() { }

  ngOnInit() {
  }
    
  deleteMe(index){
    this.eventos.splice(index, 1);
    this.dataEventos.splice(index, 1);

    if(this.eventos.length === 0) {
      this.msgEmptyListEventos = true;
    } else {
      this.msgEmptyListEventos = false;
    }
  }

}
