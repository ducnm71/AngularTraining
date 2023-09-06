import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

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

  storyId: any;

  constructor(private router1: Router, private router2: ActivatedRoute) {}

  ngOnInit(): void {
    this.router2.paramMap.subscribe(params => {
      this.storyId = params.get('storyId')
    })

  }

  backStory(){
    this.router1.navigate(['/story', this.storyId])
  }

}
