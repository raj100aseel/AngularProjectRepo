import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angularpipes',
  imports: [CommonModule],
  templateUrl: './angularpipes.html',
  styleUrl: './angularpipes.css'
})
export class Angularpipes {
  department : string = 'Accounts';
  username : string = "RajTechnologies";
  bookname : string = "Learn angular in ten days";
  amount : number = 1500;
  doj : Date = new Date();
}
