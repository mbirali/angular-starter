import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitreComponent } from './components/title/title.component';

@Component({
  selector: 'et-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [TitreComponent, NavbarComponent, RouterOutlet],
})
export class AppComponent {
  title = 'AngularCrud';
}
