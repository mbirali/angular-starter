import { Component, inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { TitleCasePipe } from '@angular/common';
import { InventoryService } from '../../inventory.service';
import { Inventory } from '../../inventory.type';


@Component({
  selector: 'ac-inventory-table',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatPaginator,
    MatFormField,
    MatInputModule,
    MatButton,
    TitleCasePipe,
    MatIcon
  ],
  templateUrl: './inventory-table.component.html',
  providers: [
    InventoryService
  ],
  encapsulation: ViewEncapsulation.None,
})
export class InventoryTableComponent {

  readonly #inventoryService = inject(InventoryService);

  displayedColumns: string[] = ['id', 'name', 'category', 'price', 'stock'];
  dataSource = new MatTableDataSource<Inventory>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit() {
    this.dataSource.data = this.#inventoryService.getInventory();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  onAdd() {
    //Adding inventory
  }

}
