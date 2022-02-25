import { Component, OnInit } from '@angular/core';
import * as Servizi from '../product.service';
import { Articolo } from '../models/articolo';
import { HttpClient } from '@angular/common/http';


@Component({
  template: `
    <div class="container mt-5">
      <div class="card" *ngFor="let articolo of articoliNegozio">
        <div class="card-body">
          <h5 class="card-title">{{ articolo.name }}</h5>
          <p class="card-text">{{ articolo.description }}</p>
          <button
            type="button"
            class="btn btn-primary"
            [routerLink]="['/dettagli', articolo]"
          >
            Dettagli
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        width: 18rem;
        margin-top:20px;
      }
    `,
  ],
})
export class HomePage implements OnInit {
  articoliNegozio: Articolo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    setInterval(() => {
      this.articoliNegozio = Servizi.articoli;
    },);
  }
}
