import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articolo } from './models/articolo';


export let articoli: Articolo[] = [];
export let carrello: Articolo[] = [];

export function aggiungiAlCarrello(articolo: Articolo) {
  console.log(articoli);
  console.log(articolo);

  console.log(articoli.indexOf(articolo));
  carrello.push(articolo);
}

export function loadArticoli(http: HttpClient): void {
  http.get('http://localhost:4201/products').subscribe((res) => {
    articoli = <Articolo[]>res;
  });
}
