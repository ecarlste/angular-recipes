import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataAccessService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService) { }

  storeRecipes() {
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-b5cd6.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(), {reportProgress: true});

    return this.httpClient.request(req);
  }

  getRecipes() {
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-b5cd6.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .map((recipes) => {
        for (const recipe of recipes) {
          if (!recipe['shoppingListState']) {
            recipe['shoppingListState'] = [];
          }
        }
        return recipes;
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }

}
