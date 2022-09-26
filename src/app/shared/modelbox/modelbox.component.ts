import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/recipes/recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-modelbox',
  templateUrl: './modelbox.component.html',
  styleUrls: ['./modelbox.component.css'],
})
export class ModelboxComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    console.log(this.data, 'data');
  }

  ngOnInit(): void {}

  onClose() {
    this.dialog.closeAll();
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.data.id);
    this.router.navigate(['/recipes'], { relativeTo: this.route });
    this.dialog.closeAll();
  }
}
