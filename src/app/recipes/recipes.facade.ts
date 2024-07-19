import { Injectable, computed, effect, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Recipe } from './recipe.type';
import { RECIPES } from './data';
/**
 * signal
 * computed (combine signalValues)
 * signale.set() // replaces existing value with new one
 * signal.update // update signal based on its value
 * signal.mutate // mutate content, not value itself (NO LONGER SUPPORTED)
 *
 * effect(() => triggerSomeSignalHere)
 *
 * RXJS & Signals
 * toSignal(obs$): Signal;
 * toObservable(Signal): Obs$;
 *
 */
@Injectable()
export class RecipeStateFacade {
  #recipes$: Observable<Recipe[]> = of(RECIPES);
  recipes = toSignal(this.#recipes$);

  constructor() {
    effect(() => () => this.totalPrice());
  }

  recipesList = signal<Recipe[]>(RECIPES);

  totalPrice = computed(() =>
    this.recipesList().reduce((p1, p2) => +p1 + +p2.price, 0)
  );

  delete(id: number) {
    this.recipesList.update((recipes) =>
      recipes.filter((recipe) => recipe.id !== id)
    );
  }

  update(recipe: Recipe) {
    console.log('0', recipe);
    if (!recipe.id) {
      recipe.id = Math.round(Math.random() * 20_000);
      console.log('1', recipe);

      this.recipesList.update((recipes) => [...recipes, recipe]);
    } else {
      console.log('2', recipe);
      this.#_update(recipe);
    }
  }

  #_update(recipe: Recipe) {
    this.recipesList.update((recipes) =>
      recipes.map((_recipe) => (_recipe.id !== recipe.id ? _recipe : recipe))
    );
  }
}
