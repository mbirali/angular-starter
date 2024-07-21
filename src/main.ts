import { enableProdMode, importProvidersFrom } from '@angular/core';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/auth/login/login.component';
import { RegisterComponent } from './app/auth/register/register.component';
import { LayoutMainComponent } from './app/layouts/main/main.component';
import { RecipesComponent } from './app/recipes/recipes.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(FormsModule, BrowserModule, ReactiveFormsModule),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter([
      {
        path: '',
        component: LayoutMainComponent,
        children: [
          {
            path: '',
            component: RecipesComponent,
          },
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
          { path: 'recipes', component: RecipesComponent },
        ],
      },

      // TODO: notFoundComponent
    ]),
    provideAnimationsAsync(),
  ],
}).catch((err) => console.error(err));
