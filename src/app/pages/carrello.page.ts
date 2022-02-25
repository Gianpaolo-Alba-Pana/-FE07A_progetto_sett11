import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Articolo } from '../models/articolo';
import * as Servizi from '../product.service';

@Component({
  template: `
  <div class="container">
    <h2 style="text-align:center">Articoli</h2>
    <h3 class=" text-center" *ngIf="articoliCarrello?.length === 0">il carrello è vuoto</h3>
    <div class="mb-4" *ngFor="let articolo of articoliCarrello">
    <div class="card-body">
          <h5 class="card-title">{{ articolo.name }}</h5>
          <p class="card-text">{{articolo.description}} <br> {{articolo.price | currency : 'EUR'}}</p>
    </div>
  </div>
  <hr>
    <div class="container mt-5">
      <h2 style="text-align:center">Completa ordine</h2>
      <div class="container">
        <div class="row">
          <div class="col">
            <form [formGroup]="form" (ngSubmit)="onSubmit()" #f="ngForm">

              <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" formControlName="nome" id="nome" class="form-control" />
                <span [style.color]="'red'" *ngIf="
                getFormC('nome')?.invalid &&
                getFormC('nome')?.touched
                ">*Campo obbligatorio</span>
              </div>

              <div class="form-group mt-5">
                <label for="indirizzo">Indirizzo</label>
                <input type="text" formControlName="indirizzo" id="indirizzo" class="form-control" />
                <span [style.color]="'red'" *ngIf="
                getFormC('indirizzo')?.invalid &&
                getFormC('indirizzo')?.touched
                ">*Campo obbligatorio</span>
              </div>

              <button type="submit" class="btn btn-primary mt-2" [disabled]="f.invalid">Invia</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
  input.ng-invalid.ng-touched{
    border: 1px solid red;
  }
  `],
})
export class CarrelloPage implements OnInit {
  articoliCarrello: Articolo[] = Servizi.carrello;
  form!:FormGroup

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      'nome': new FormControl(null, Validators.required),
      'indirizzo': new FormControl(null, Validators.required,)
    })
  }

  getFormC(name:string){
    return this.form.get(name)
  }

  onSubmit(){
    console.log(this.form)
    Servizi.carrello.length=0;
    this.form.reset()
  }

}
