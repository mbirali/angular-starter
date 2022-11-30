import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { RecipeDto } from '../models/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  urlApi= environment.api;

  constructor(private http:HttpClient) {   }

  // GET all
  getAll(){
    return this.http.get<RecipeDto[]>(this.urlApi);
  }

  // DELETE one
  delete(id: number){
    return this.http.delete(`${this.urlApi}/${id}`);
  }

  // CREATE one
  post(recipe: RecipeDto){
      return this.http.post<RecipeDto>(this.urlApi, recipe);
  }

  // UPDATE one
  updateRecipe(recipe: RecipeDto){
    return this.http.put(`${this.urlApi}/${recipe.id}`, recipe);
  }

  // search by id
  search(id: number){
      return this.http.get<RecipeDto>(`${this.urlApi}/${id}`); //${id}
  }

}


