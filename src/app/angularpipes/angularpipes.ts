import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from '../reverse-pipe';

@Component({
  selector: 'app-angularpipes',
  imports: [CommonModule, ReversePipe],
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
