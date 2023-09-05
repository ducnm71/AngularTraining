import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AddStoryComponent {
  @Input() showModal: boolean = false;

  closeModal() {
    this.showModal = false;
  }
}
