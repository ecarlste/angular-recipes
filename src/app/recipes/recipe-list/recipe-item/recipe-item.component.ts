import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() myRecipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    console.log('recipe is: ' + this.myRecipe);
  }

  onSelected() {
    this.recipeSelected.emit();
  }
}
