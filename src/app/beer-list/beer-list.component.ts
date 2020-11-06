import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl:'./beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers: Beer[] = [
    {
    name: 'Ipa',
    type: 'Sabor intenso y amargo',
    price: 200,
    stock: 5,
    image: "assets/img/ipa.png",
    clearance: false,
    quantity:0,
    
  },
  {
    name: 'Red Irish',
    type: 'Roja y frutada',
    price: 170,
    stock: 4,
    image: "assets/img/ipa.png",
    clearance: false,
    quantity:0,
  },
  {
    name: 'Apa',
    type: 'Amarga lupulada',
    price: 100,
    stock: 0,
    image: "assets/img/ipa.png",
    clearance: true,
    quantity:0,
  },
  {
    name: 'Honey',
    type: 'Rubia fuerte con miel',
    price: 150,
    stock: 0,
    image: "assets/img/ipa.png",
    clearance: false,
    quantity:0,
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  changeQuantity(event,beer:Beer):void{
      if(event.key >0 && event.key<5)
        event.preventDefault();
  }
  upQuantity(beer:Beer):void{
    if(beer.quantity < beer.stock)
      beer.quantity++;
  }

  downQuantity(beer:Beer):void{
    if(beer.quantity > 0)
      beer.quantity--;
  }

}
