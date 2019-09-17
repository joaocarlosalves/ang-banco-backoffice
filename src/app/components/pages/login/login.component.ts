import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() containerLogin = true;
  @Input() showForm = true;
  @Input() msgLogin = "Por favor aguarde...";
  @Input() showMsgLogin = false;
  
  constructor(public router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    this.showMsgLogin = true;
    this.showForm = false;
    this.router.navigate(['canais']);
    
    setTimeout(() => {
      this.containerLogin = false;
    }, 3000);
  }

}
