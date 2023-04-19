import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @ViewChild('f') signupForm: NgForm;
  submitted = false;

  submit() {
    this.signupForm.resetForm();

    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
    }, 5000);
  }
}
