import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'et-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule, RouterLink],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
