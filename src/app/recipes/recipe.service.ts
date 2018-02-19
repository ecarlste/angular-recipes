import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
      'A super-tasty schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/440px-Wiener-Schnitzel02.jpg',
      [
        new Ingredient('Meat', 20),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else needs to be said?',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Big_Mac_hamburger.jpg/440px-Big_Mac_hamburger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

}
