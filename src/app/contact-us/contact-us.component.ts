import { Component, ElementRef, ViewChild } from '@angular/core';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms'; // Import NgForm

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';

  @ViewChild('name') nameField!: ElementRef;
  @ViewChild('email') emailField!: ElementRef;
  @ViewChild('message') messageField!: ElementRef;

  constructor(private dialog: MatDialog) {}

  @ViewChild('contactForm') contactForm!: NgForm; // Reference to the form

  onSubmit() {
    // Simulate form submission
    setTimeout(() => {
      this.dialog.open(SuccessModalComponent, {
        width: '300px',
      });

      this.contactForm.resetForm(); // Reset the form
    }, 500);
  }
}
