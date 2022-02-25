import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as Servizi from './product.service';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>


  `,
  styles: [`

  `
  ]
})
export class AppComponent {
  title = 'cart';

  constructor(public http:HttpClient){}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    Servizi.loadArticoli(this.http);
  }

}
