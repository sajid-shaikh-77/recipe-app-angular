import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModelboxComponent } from 'src/app/shared/modelbox/modelbox.component';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    console.log(this.route.params);

    this.route.params.subscribe((params: Params) => {
      console.log(params, 'params');
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
      console.log(this.id, 'In Recipe');
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  onOpen() {
    this.dialog.open(ModelboxComponent, {
      data: { recipe: this.recipe, id: this.id },
    });
  }

  // onDeleteRecipe() {
  //   this.recipeService.deleteRecipe(this.id);
  //   this.router.navigate(['/recipes']);
  // }
}
