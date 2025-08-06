import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.html',
  styleUrl: './binding.css'
})
export class Binding {
  username : string = "";
  firstName : string = "";
  lastName : string = "";
  email : string = "";
  dateMessage : string = "";

  address : string = "1234, hyderabad";
  controlFlag : boolean = false;
  constructor(){
    this.username = "raj123";
    this.firstName = "Raj";
    this.lastName = "Technologies";
    this.email = "raj@gmail.com"
    setInterval( () => {
      let currentDate = new Date();
      this.dateMessage = currentDate.toDateString()+ " "+
        currentDate.toLocaleTimeString();
    })
  }

  updateUsername(newUser : string) {
    this.username = newUser;
  }
}
