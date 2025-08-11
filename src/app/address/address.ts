import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-address',
  imports: [CommonModule],
  templateUrl: './address.html',
  styleUrl: './address.css'
})
export class Address {
  user : any;
  constructor() {
    this.user = {
      name : 'Raj',
      address : '1234-hyd',
      phone : ['123-123-1234','456-456-4567']
    };
  }
}
