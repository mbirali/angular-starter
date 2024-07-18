import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.interface';
import { RecipeService } from '../services/recipe.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  styles: `
  .hvr:hover{
    background-color: rgb(173, 201, 192);
    color:black;
  }
  `,
})
export class ApiComponent implements OnInit {
  array: Recipe[] = new Array<Recipe>();

  recipeFormGroup: FormGroup = new FormGroup({
    id: new FormControl<number>(+''),

    name: new FormControl<string>('111', [
      Validators.required,
      Validators.minLength(3),
    ]),

    price: new FormControl<number>(+'11', [
      Validators.required,
      Validators.pattern('[0-9]*'),
    ]),
  });

  get name() {
    return this.recipeFormGroup.get('name');
  }

  get price() {
    return this.recipeFormGroup.get('price');
  }

  addOrPut = false;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe() {
    this.recipeService.getAll().subscribe((data: Recipe[]) => {
      this.array = data;
    });
  }

  deleteRecipe(id: number) {
    this.recipeService.delete(id).subscribe(() => {
      this.array = this.array.filter((aRecipe) => aRecipe.id != id);
    });
  }

  postRecipe() {
    const { name, price } = this.recipeFormGroup.value;
    this.recipeService.post({ name, price }).subscribe((eachRecipe: Recipe) => {
      this.array = [eachRecipe, ...this.array];
      this.clearInputs();
    });
  }

  // make inputs empty
  clearInputs() {
    this.recipeFormGroup.reset({
      name: '',
      price: +'',
    });
  }

  // edit recipeService
  editRecipe(eachRecipe: Recipe) {
    this.recipeFormGroup.patchValue(eachRecipe);
    this.addOrPut = true;
  }

  // update recipeService
  putRecipe() {
    this.recipeService
      .updateRecipe(this.recipeFormGroup.value)
      .subscribe(() => {
        this.clearInputs();
        this.getRecipe();
        this.addOrPut = false;
      });
  }
}
