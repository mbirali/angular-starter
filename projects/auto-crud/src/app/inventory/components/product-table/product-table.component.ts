import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'ac-product-table',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatPaginator,
    MatFormField,
    MatInputModule,
    MatButton
  ],
  templateUrl: './product-table.component.html',
  styles: ``
})
export class ProductTableComponent {

  columns :string[] =  ['id', 'name', 'category', 'price', 'stock'];

  products : {id: number, name:string, category: string, price: number, stock: number }[]=[
    { id: 1, name: 'Ordinateur portable', category: 'Informatique', price: 899.99, stock: 10 },
    { id: 2, name: 'Smartphone', category: 'Téléphonie', price: 599.99, stock: 25 },
    { id: 3, name: 'Clavier mécanique', category: 'Accessoires', price: 129.90, stock: 15 },
    { id: 4, name: 'Écran 24"', category: 'Périphériques', price: 199.00, stock: 5 }
  ]

  dataSource = new MatTableDataSource(this.products);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  onAdd(){

  }

}
