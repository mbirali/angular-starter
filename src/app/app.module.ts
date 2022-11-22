
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CuisineComponent } from './components/cuisine/cuisine.component';
import { BurgerComponent } from './components/burger/burger.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { SaladeComponent } from './components/salade/salade.component';
import { LoginComponent } from './contact/login/login.component';
import { RegisterComponent } from './contact/register/register.component';
import { TitreComponent } from './components/titre/titre.component';
import { ApiComponent } from './api/api.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CuisineComponent,
    BurgerComponent,
    PizzaComponent,
    SaladeComponent,
    LoginComponent,
    RegisterComponent,
    TitreComponent,
    ApiComponent
  ],
  imports:[
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CuisineComponent},
      { path: 'burger', component: BurgerComponent},
      { path: 'pizza', component: PizzaComponent},
      { path: 'salade', component: SaladeComponent},
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'api', component:ApiComponent},
      // TODO: notFoundComponent
  ])],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
