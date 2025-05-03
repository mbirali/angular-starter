import { Injectable } from '@angular/core';
import { IInventory } from './inventory.interface';
import { Inventory } from './inventory.type';

@Injectable()
export class InventoryService implements IInventory {

  private readonly inventory: Inventory[] = [
    { id: 1, name: 'Ordinateur portable', category: 'Informatique', price: 899.99, stock: 10 },
    { id: 2, name: 'Smartphone', category: 'Téléphonie', price: 599.99, stock: 25 },
    { id: 3, name: 'Clavier mécanique  ', category: 'Accessoires', price: 129.90, stock: 15 },
    { id: 4, name: 'Écran 24"', category: 'Périphériques', price: 199.00, stock: 5 }
  ];

  getInventory(): Inventory[] {
    return this.inventory;
  }

}
