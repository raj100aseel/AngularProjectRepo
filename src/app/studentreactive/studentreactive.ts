import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentreactive',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './studentreactive.html',
  styleUrl: './studentreactive.css'
})
export class Studentreactive implements OnInit{
  enquiryForm !: FormGroup;

  courses = ['UI Full Stack', 'Java Full Stack', 'Python Full Stack', 'Linux and AWS'];

  constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.enquiryForm = this.fb.group({
      fullName:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
      course:['',Validators.required],
      message:['']
    });
  }

  onSubmit() {
    if (this.enquiryForm.valid) {
      console.log('Form Submitted', this.enquiryForm.value);
      alert('Your enquiry has been submitted');
    }
    else {
      alert('Please fill all required fields correctly');
    }
  }

}
