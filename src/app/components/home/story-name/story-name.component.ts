import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-story-name',
  templateUrl: './story-name.component.html',
  styleUrls: ['./story-name.component.css'],
  standalone: true,
  imports: [MatButtonModule,MatIconModule, MatMenuModule],
})
export class StoryNameComponent {
  @Input() id: any

  constructor(private router: Router) {}

  textOfStory() {
    this.router.navigate(['/text']);
  }

  wordProcess(storyId: number){
    this.router.navigate(['/word', storyId]);
  }
}
