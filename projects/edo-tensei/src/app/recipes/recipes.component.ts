import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Recipe } from './recipe.type';
import { RecipeStateFacade } from './recipes.facade';

@Component({
  selector: 'et-api',
  templateUrl: './recipes.component.html',
  standalone: true,
  providers: [RecipeStateFacade],
  imports: [FormsModule, ReactiveFormsModule],
  styles: `
  .hvr:hover{
    background-color: rgb(173, 201, 192);
    color:black;
  }
  `,
})
export class RecipesComponent {
  // di
  #recipeStateFacade = inject(RecipeStateFacade);

  //
  recipes = this.#recipeStateFacade.recipesList;
  totalPrice = this.#recipeStateFacade.totalPrice;

  //
  recipeForm: FormGroup = new FormGroup({
    id: new FormControl<number>(0),

    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),

    price: new FormControl<number>(1, [
      Validators.required,
      Validators.pattern('[0-9]*'),
    ]),
  });
  //
  isAdd = true;

  get name() {
    return this.recipeForm.get('name');
  }

  get price() {
    return this.recipeForm.get('price');
  }

  delete(id: number) {
    this.#recipeStateFacade.delete(id);
  }

  update() {
    this.#recipeStateFacade.update(this.recipeForm.value);
    this.clearInputs();
  }

  // make inputs empty
  clearInputs() {
    this.recipeForm.reset({
      name: '',
      price: +'',
    });
    this.isAdd = true;
  }

  // edit recipeService
  editRecipe(eachRecipe: Recipe) {
    this.recipeForm.patchValue(eachRecipe);
    this.isAdd = false;
  }
}
