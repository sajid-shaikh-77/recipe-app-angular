import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storedRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://recipe-app-be-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((reponse) => {
        // console.log(reponse);
      });
  }

  fetchRecipes() {
    // this.authService.user.pipe(take(1)).subscribe((user) => {});

    return this.http
      .get<Recipe[]>(
        'https://recipe-app-be-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes: Recipe[]) => {
          return recipes?.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
