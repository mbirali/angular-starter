import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Column, COLUMN_NAMES } from './product.type';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'ac-product-table',
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
  templateUrl: './product-table.component.html',
  styles: ``
})
export class ProductTableComponent {

// Utiliser COLUMN_NAMES directement
  columns: Column[] = COLUMN_NAMES;
  
  products: { id: number, name: string, category: string, price: number, stock: number }[] = [
    { id: 1, name: 'Ordinateur portable', category: 'Informatique', price: 899.99, stock: 10 },
    { id: 2, name: 'Smartphone', category: 'Téléphonie', price: 599.99, stock: 25 },
    { id: 3, name: 'Clavier mécanique', category: 'Accessoires', price: 129.90, stock: 15 },
    { id: 4, name: 'Écran 24"', category: 'Périphériques', price: 199.00, stock: 5 }
  ]

  dataSource = new MatTableDataSource(this.products);

  @ViewChild(MatPaginator) private readonly paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  onAdd() {

  }

}
