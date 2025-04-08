import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ac-root',
  imports: [
    RouterOutlet,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'auto-crud';
}
