import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Binding } from './binding/binding';
import { Address } from './address/address';
import { CommonModule } from '@angular/common';
import { Employee } from './employee/employee';
import { Angularpipes } from './angularpipes/angularpipes';
import { Itemcomp } from './itemcomp/itemcomp';
import { Book } from './book/book';
import { Studenttemplatedriven } from './studenttemplatedriven/studenttemplatedriven';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Binding,Address,Employee,Angularpipes,Itemcomp,Book, Studenttemplatedriven],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "Angular Project";
  name = 'Raj';
}
