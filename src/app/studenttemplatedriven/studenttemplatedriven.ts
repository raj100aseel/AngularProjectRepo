import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-studenttemplatedriven',
  imports: [FormsModule,CommonModule],
  templateUrl: './studenttemplatedriven.html',
  styleUrl: './studenttemplatedriven.css'
})
export class Studenttemplatedriven {
  courses = ['Angular', 'Spring', 'Python','Core Java','CPP'];

  enquiry = {
    name:'',
    email:'',
    phone:'',
    course:'',
    message:'',
  };
  onSubmit(form:any) {
    if (form.valid) {
      console.log('Form Submitred',this.enquiry);
      alert('Enquiry Submitted Successfully');
      form.reset();
    }
  }
}
