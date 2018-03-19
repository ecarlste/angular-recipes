import { Ingredient } from '../../shared/ingredient.model';
import { ADD_INGREDIENT, ADD_INGREDIENTS, DELETE_INGREDIENT, ShoppingListActions, UPDATE_INGREDIENT } from './shopping-list.actions';

const initialState = {
  ingredients: [
    new Ingredient('Applies', 5),
    new Ingredient('Tomatoes', 10)
  ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions) {
  let ingredients;

  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };

    case ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };

    case UPDATE_INGREDIENT:
      const ingredient = state.ingredients[action.payload.index];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.ingredient
      };
      ingredients = [...state.ingredients];
      ingredients[action.payload.index] = updatedIngredient;
      return {
        ...state,
        ingredients: ingredients
      };

    case DELETE_INGREDIENT:
      ingredients = [...state.ingredients];
      ingredients.splice(action.payload, 1);
      return {
        ...state,
        ingredients: ingredients
      };

    default:
      return state;
  }

}
