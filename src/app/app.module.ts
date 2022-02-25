import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomePage } from './pages/home.page';
import { CarrelloPage } from './pages/carrello.page';
import { NavbarComponent } from './navbar.component';
import { DettagliPage } from './pages/dettagli.page';
import { AppRoutingModule } from './app-routing.module';


const routes:Route[] = [
  {
    path:'',
    component: HomePage
  },
  {
    path:'carrello',
    component: CarrelloPage
  },
  {
    path: 'dettagli',
    component: DettagliPage,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    CarrelloPage,
    NavbarComponent,
    DettagliPage,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
