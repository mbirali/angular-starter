import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './layouts/components/toolbar/toolbar.component';

@Component({
  selector: 'ac-root',
  imports: [RouterOutlet, ToolbarComponent],
  template: `
    <ac-toolbar></ac-toolbar>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'auto-crud';
}
