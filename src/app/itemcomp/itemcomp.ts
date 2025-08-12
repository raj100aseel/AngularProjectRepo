import { Component } from '@angular/core';
import { Item } from '../item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-itemcomp',
  imports: [CommonModule],
  templateUrl: './itemcomp.html',
  styleUrl: './itemcomp.css'
})
export class Itemcomp {
  items : any;
  constructor(private item : Item){
    this.items = item.getItems();
  }
}
