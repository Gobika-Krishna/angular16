import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f', { static: false }) ingForm: NgForm;

  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  itemToEdit: Ingredient;
  constructor(private shoppinglistService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppinglistService.editItemIndex.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.itemToEdit = this.shoppinglistService.getIngredient(index);
      this.ingForm.setValue({
        name: this.itemToEdit.name,
        amount: this.itemToEdit.amount,
      });
    });
  }

  addItem(form: HTMLFormElement) {
    const newIngredientObj = new Ingredient(form.value.name, form.value.amount);

    if (this.editMode) {
      this.shoppinglistService.updateIngredient(
        this.editedItemIndex,
        newIngredientObj
      );
    } else {
      this.shoppinglistService.addIngredient(newIngredientObj);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.ingForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppinglistService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
