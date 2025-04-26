import { Product } from './product.interface';

export type Column = keyof Product;

export const COLUMN_NAMES: Column[] = ['id', 'name', 'category', 'price', 'stock'];
