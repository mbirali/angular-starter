import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [RouterLink],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
