import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
    imports: [FormsModule]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
