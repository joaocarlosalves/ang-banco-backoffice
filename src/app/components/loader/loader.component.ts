import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  @Input() loading = true;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
