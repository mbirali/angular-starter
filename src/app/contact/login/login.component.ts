import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'et-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
