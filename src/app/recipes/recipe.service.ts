import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
      'A super-tasty schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/440px-Wiener-Schnitzel02.jpg',
      [
        new Ingredient('Meat', 1),
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

  constructor() {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.notifyRecipesChanged();
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.notifyRecipesChanged();
  }

  private notifyRecipesChanged() {
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.notifyRecipesChanged();
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.notifyRecipesChanged();
  }
}
