import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Recipe } from '../models/recipe.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  urlApi = environment.api;

  constructor(private http: HttpClient) {}

  // GET all
  getAll() {
    return this.http.get<Recipe[]>(this.urlApi);
  }

  // DELETE one
  delete(id: number) {
    return this.http.delete(`${this.urlApi}/${id}`);
  }

  // CREATE one
  post(recipe: Recipe) {
    recipe.id = +Math.round(Math.random() * 100_00);
    return this.http.post<Recipe>(this.urlApi, recipe);
  }

  // UPDATE one
  updateRecipe(recipe: Recipe) {
    return this.http.put(`${this.urlApi}/${recipe.id}`, recipe);
  }

  // search by id
  search(id: number) {
    return this.http.get<Recipe>(`${this.urlApi}/${id}`); //${id}
  }
}
