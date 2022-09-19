import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LogginService } from '../logging.service';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private idChangeSub: Subscription;

  constructor(
    private slService: ShoppingListService,
    private logginServices: LogginService
  ) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.idChangeSub = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    this.logginServices.printLog('Hellow from Shopping List');
  }
  ngOnDestroy(): void {
    this.idChangeSub.unsubscribe();
  }
  onEditItem(index: number) {
    this.slService.startedEDiting.next(index);
  }
}
