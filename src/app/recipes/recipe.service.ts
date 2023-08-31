import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  constructor(private shoppinglistService: ShoppingListService) {}
  private recipes: Recipe[] = [];

  //dummy data for testing
  // recipes: Recipe[] = [
  //   new Recipe(
  //     'Blueberry Loaf',
  //     'This blueberry bread recipe bakes up beautifully moist',
  //     'Preheat oven to 350° F (175° C). Grease and flour an 8 1/2 x 4 1/2 inch loaf pan.  Mix flour, sugar, baking powder, and salt in a large bowl. Stir milk, oil, egg, and vanilla extract into flour mixture until batter is just blended.      Combine washed and dried blueberries with 1 tsp of flour and gently fold them into the batter. Pour batter into prepared loaf pan. Sprinkle one tablespoon of sugar over the batter.  Bake in the preheated oven until a toothpick inserted into the center comes out clean, 60 to 70 minutes. Let cool in the pan for 15 minutes, then transfer to a cooling rack and let cool completely.',
  //     'https://www.allrecipes.com/thmb/vf9E9MMkUJgpg2lCLb99i2fHBx0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/229694-blueberry-loaf-ddmfs-3x2-149-3102f88d13f34f7b958dca7f6b065e31.jpg',
  //     [
  //       new Ingredient('all-purpose flour', '1 ½ cups'),
  //       new Ingredient('white sugar', '¾ cup'),
  //       new Ingredient('baking powder', '2 teaspoons'),
  //       new Ingredient('teaspoon salt', '1 teaspoon'),
  //       new Ingredient('milk', '½ cup'),
  //       new Ingredient('vegetable oil', '¼ cup'),
  //       new Ingredient('egg', '1'),
  //       new Ingredient('vanilla extract', '½ teaspoons'),
  //       new Ingredient('blueberries', '1 ½ cup'),
  //     ]
  //   ),
  //   new Recipe(
  //     'Peach Cake with Brown Sugar Icing',
  //     'When peaches are in season! ',
  //     'Bake in the preheated oven until a toothpick inserted into the center comes out clean (a few moist crumbs are okay), 28 to 33 minutes. Allow cake to begin cooling on a wire rack while you prepare icing.Mix flour, sugar, baking powder, and salt in a large bowl. Stir milk, oil, egg, and vanilla extract into flour mixture until batter is just blended. Immediately pour icing over warm cake, and spread quickly with a spatula into an even layer, as icing will set quickly.',
  //     'https://www.allrecipes.com/thmb/2QlOmFSNoI06yrBnRQYFequH5sc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7564806_Peach-Cake-with-Brown-Sugar-Icing_fabeveryday_4x3-087302566f914509b9d8dfd1f37b226e.jpg',
  //     [
  //       new Ingredient('all-purpose flour', '1 ½ cups'),
  //       new Ingredient('white sugar', '¾ cup'),
  //       new Ingredient('baking powder', '2 teaspoons'),
  //       new Ingredient('teaspoon salt', '1 teaspoon'),
  //       new Ingredient('milk', '½ cup'),
  //       new Ingredient('vegetable oil', '¼ cup'),
  //       new Ingredient('egg', '1'),
  //       new Ingredient('vanilla extract', '½ teaspoons'),
  //       new Ingredient('blueberries', '1 ½ cup'),
  //     ]
  //   ),
  // ];

  // to set the fetched recipes from DB on the template
  setRecipe(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    //slice returns exact copy of original array
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newrecipe: Recipe) {
    this.recipes[index] = newrecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  recipeDelete(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
