import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false'),
    new Recipe('A Test Recipe again...', 'This is simply a test',
      'https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false')
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

}
