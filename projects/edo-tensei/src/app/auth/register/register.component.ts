import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'et-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [FormsModule],
  styles: `
    .btn:hover{
      background-color: rgb(54, 49, 43);
    }
    `,
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
