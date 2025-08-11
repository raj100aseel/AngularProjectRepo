import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [CommonModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee {
  /*
    Department 1 => Accounts
    Department 2 => HR
    Department 3 => Loans
  */
  employees : any[] = [];
  constructor() {
    this.employees = [
      {
        name : 'Raj',
        designation : 'Clerk',
        salary : '30000',
        department : '1',
        address : ['1234','Miyapur','Hyd'],
        phone : ['123-123-1234','345-345-3456']
      },
      {
        name : 'Ramu',
        designation : 'HR Manager',
        salary : '50000',
        department : '2',
        address : ['345','BHEL','Hyd'],
        phone : ['456-456-4567','567-567-5678']
      }
    ]
  }
}
