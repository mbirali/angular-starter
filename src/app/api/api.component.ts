import { Component, OnInit } from '@angular/core';
import { RecipeDto } from '../models/recipe.interface';
import { RecipeService } from '../services/recipe.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})

export class ApiComponent implements OnInit {
  array: RecipeDto[] = new Array<RecipeDto>();

  recipeFormGroup: FormGroup = new FormGroup({
    id: new FormControl<number>(+''),

    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3)
    ]),

    price: new FormControl<number>(+'', [
      Validators.required,
      Validators.pattern('[0-9]*'),
    ])
  });

  get name() {
    return this.recipeFormGroup.get('name');
  }

  get price() {
    return this.recipeFormGroup.get('price');
  }

  addOrPut = false;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe() {
    this.recipeService.getAll()
    .subscribe((data: RecipeDto[]) =>{
      this.array = data;
    })
  }

  deleteRecipe(id: number){
    this.recipeService.delete(id).subscribe(
      () => {this.array = this.array.filter( (aRecipe) => aRecipe.id != id)
      })
  }

  postRecipe(){
    if(!confirm(`api.component.ts:58 -> Did you run the JSON-SERVER ? if yes please comment this line`)) alert(`You should run the json-server  (read README file) ^^`);
    this.recipeService.post(this.recipeFormGroup.value)
    /*
      this.recipeFormGroup.value is equivalent to:
      {
        name,
        price
      }
    */
    .subscribe(
      (eachRecipe: any)=>{
          this.array = [eachRecipe, ...this.array];
          this.clearInputs();
    })

  }

  // make inputs empty
  clearInputs(){
    this.recipeFormGroup.reset({
      name: '',
      price: +''
    });
  }

  // edit recipeService
  editRecipe(eachRecipe: RecipeDto){
    this.recipeFormGroup.get('id')?.setValue(eachRecipe.id);
    this.recipeFormGroup.get('name')?.setValue(eachRecipe.name);
    this.recipeFormGroup.get('price')?.setValue(eachRecipe.price);
    this.addOrPut=true;
  }

  // update recipeService
  putRecipe(){
    this.recipeService.updateRecipe(this.recipeFormGroup.value)
    .subscribe( () => {
      this.clearInputs();
      this.addOrPut = false;
    })
  }
}
