import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductTableComponent } from "./inventory/components/product-table/product-table.component";

@Component({
  selector: 'ac-root',
  imports: [RouterOutlet, ProductTableComponent],
  template: `
    <ac-product-table/>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'auto-crud';
}
