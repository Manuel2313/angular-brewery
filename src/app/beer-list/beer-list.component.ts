import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl:'./beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beer = {
    "nombre":"Ipa",
    "descripcion" :"Sabor intenso y amargo",
    "precio":"200",
    "stock":"5",
    "image": "assets/img/ipa.jpeg",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
