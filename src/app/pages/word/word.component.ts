import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'

import { StoryComponent } from './story/story.component';
import { TextPageContentComponent } from './text-page-content/text-page-content.component';



@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
  standalone: true,
  imports: [StoryComponent,TextPageContentComponent ,MatButtonModule,MatIconModule],
})
export class WordComponent {
  constructor(private router: Router) {}

  backStory(){
    this.router.navigate(['/'])
  }

}
