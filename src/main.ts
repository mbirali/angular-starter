import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { RecipesComponent } from './app/recipes/recipes.component';
import { RegisterComponent } from './app/contact/register/register.component';
import { LoginComponent } from './app/contact/login/login.component';
import { SaladeComponent } from './app/components/salade/salade.component';
import { PizzaComponent } from './app/components/pizza/pizza.component';
import { BurgerComponent } from './app/components/burger/burger.component';
import { CuisineComponent } from './app/components/cuisine/cuisine.component';
import { provideRouter } from '@angular/router';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import {
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(FormsModule, BrowserModule, ReactiveFormsModule),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter([
      { path: '', component: CuisineComponent },
      { path: 'burger', component: BurgerComponent },
      { path: 'pizza', component: PizzaComponent },
      { path: 'salade', component: SaladeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'recipes', component: RecipesComponent },
      // TODO: notFoundComponent
    ]),
  ],
}).catch((err) => console.error(err));
