import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-canal',
  templateUrl: './adicionar-canal.component.html',
  styleUrls: ['./adicionar-canal.component.css']
})
export class AdicionarCanalComponent implements OnInit {
  @Input() nameCanal: string;
  @Input() showFormNovoCanal = true;
  @Input() msgInsertSuccess = false;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  cadastrarNovamente() {
    this.showFormNovoCanal = true;
    this.msgInsertSuccess = false;
  }

  novoCanal() {
    this.showFormNovoCanal = false;
    this.msgInsertSuccess = true;
    setTimeout(() => {
      this.router.navigate(['canais/adicionar']);
    }, 10000);
  }

}
