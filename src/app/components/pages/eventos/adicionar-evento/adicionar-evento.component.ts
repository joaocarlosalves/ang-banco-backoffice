import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-evento',
  templateUrl: './adicionar-evento.component.html',
  styleUrls: ['./adicionar-evento.component.css']
})
export class AdicionarEventoComponent implements OnInit {
  @Input() nameEvento: string;
  @Input() showFormNovoEvento = true;
  @Input() msgInsertSuccess = false;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  cadastrarNovamente() {
    this.showFormNovoEvento = true;
    this.msgInsertSuccess = false;
  }

  novoEvento() {
    this.showFormNovoEvento = false;
    this.msgInsertSuccess = true;
    setTimeout(() => {
      this.router.navigate(['eventos/adicionar']);
    }, 10000);
  }

}
