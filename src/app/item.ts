import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Item {
  items = [
    {ino:111,iname:'Sugar',price:40},
    {ino:222,iname:'Maagi',price:84},
    {ino:333,iname:'Chips',price:20}
  ];
  getItems() {
    return this.items;
  }
}
