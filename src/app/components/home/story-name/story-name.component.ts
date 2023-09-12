import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu';
import { StoryService } from 'src/app/Services/story/story.service';


@Component({
  selector: 'app-story-name',
  templateUrl: './story-name.component.html',
  styleUrls: ['./story-name.component.css'],
  standalone: true,
  imports: [MatButtonModule,MatIconModule, MatMenuModule],
})
export class StoryNameComponent implements OnInit {
  @Input() id: any
  detailStory: any

  constructor(private router: Router, private storyService: StoryService) {}
  ngOnInit(): void {
    this.storyService.detailStory(this.id).subscribe(data => {
      this.detailStory = data
    })
  }


  textOfStory() {
    this.router.navigate(['/text']);
  }

  wordProcess(storyId: number){
    this.router.navigate(['/word', storyId]);
  }
}
