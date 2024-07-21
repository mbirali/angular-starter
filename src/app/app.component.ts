import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'et-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {}
