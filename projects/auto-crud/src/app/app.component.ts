import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InventoryTableComponent } from "./inventory/components/inventory-table/inventory-table.component";

@Component({
  selector: 'ac-root',
  imports: [RouterOutlet, InventoryTableComponent],
  template: `
    <ac-inventory-table/>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'auto-crud';
}
