import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    standalone: true,
    imports: [FormsModule]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
