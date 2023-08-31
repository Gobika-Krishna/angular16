import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  constructor(private router: Router) {}
  @Input() isOpen = false;

  dismissModal() {
    this.isOpen = !this.isOpen;
    this.router.navigate(['/recipes']);
  }
}
