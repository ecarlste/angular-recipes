import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';

@Injectable()
export class DataAccessService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-b5cd6.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get('https://ng-recipe-book-b5cd6.firebaseio.com/recipes.json').
      subscribe(
      (response: Response) => {
        const recipes = response.json();
        this.recipeService.setRecipes(recipes);
      }
    );
  }

}
