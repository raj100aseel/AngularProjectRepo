import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book',
  imports: [FormsModule],
  templateUrl: './book.html',
  styleUrl: './book.css'
})
export class Book {
  bid : string = "";
  bname : string = "";
  price : string = "";

  onClickSubmit(book : any) {
    this.bid = book.bid;
    this.bname = book.name;
    this.price = book.price;
  }
}
