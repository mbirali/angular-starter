import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'et-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
})
export class NavbarComponent {
  navigations = ['burger', 'pizza', 'salade', 'login', 'register', 'recipes'];
}
