import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitreComponent } from './components/titre/titre.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [TitreComponent, NavbarComponent, RouterOutlet]
})
export class AppComponent {
  title = 'AngularCrud';
}
