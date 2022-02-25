import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" routerLinkActive="active" routerLink="/" [routerLinkActiveOptions]="{exact:true}" aria-current="page" href="#">🏚 Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLinkActive="active" routerLink="/carrello">🛒Carrello </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  `,
  styles: [
    `
     a{
    margin-right:10px;
  }

  .active{
    color: blue!important;
  }
    `
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
