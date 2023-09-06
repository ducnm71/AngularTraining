import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServerService } from 'src/app/Services/http-server.service';

import { StoryNameComponent } from './story-name/story-name.component';
import { PageContentStoryComponent } from './page-content-story/page-content-story.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [StoryNameComponent, PageContentStoryComponent]
})
export class HomeComponent implements OnInit {

  storyId: any;

  constructor(private httpServerService: HttpServerService,  private route: ActivatedRoute,){}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.storyId = params.get('id')
    })
  }

}
