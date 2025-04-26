import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Column, COLUMN_NAMES } from '../../product.type';
import { TitleCasePipe } from '@angular/common';
import { Product } from '../../product.interface';
import { ProductService } from '../../product.service';


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
  styleUrl: './product-table.component.scss',
  providers:[
    ProductService
  ]
})
export class ProductTableComponent {

  columns: Column[] = COLUMN_NAMES;
  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private readonly productService: ProductService) {}

  ngOnInit() {
    this.dataSource.data = this.productService.getProducts();
  }
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
