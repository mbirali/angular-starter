import { Component, OnInit } from '@angular/core';
import { SaladeComponent } from '../salade/salade.component';
import { PizzaComponent } from '../pizza/pizza.component';
import { BurgerComponent } from '../burger/burger.component';

@Component({
    selector: 'app-cuisine',
    templateUrl: './cuisine.component.html',
    styleUrls: ['./cuisine.component.css'],
    standalone: true,
    imports: [BurgerComponent, PizzaComponent, SaladeComponent]
})
export class CuisineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
