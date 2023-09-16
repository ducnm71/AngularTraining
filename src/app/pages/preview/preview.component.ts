import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';


import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { PageService } from 'src/app/Services/page/page.service';

import { CanvasPreviewComponent } from './canvas-preview/canvas-preview.component';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
  standalone: true,
  imports: [CanvasPreviewComponent, MatTabsModule, MatIconModule, MatButtonModule, CommonModule, NgIf]
})
export class PreviewComponent {

  storyId: any
  pageId: any
  pages = []
  selectedPage: any
  idPageSelected: any
  bgPageSelected: any

  constructor(private router1: Router, private router2: ActivatedRoute, private pageService: PageService){}

  ngOnInit(): void {
    this.router2.paramMap.subscribe(params => {
      this.storyId = params.get('storyId')
      this.pageId = params.get('pageId')
    })
    this.getPages(this.storyId)
  }

  getPages(storyId: any) {
    this.pageService.getPages(storyId).subscribe(data => {
      this.pages = data
    })
  }

  handlePath(path: any) {
    if (path.includes('fake') ){

      const newPath = path.replace(/^.*[\\\/]/, '')
      return newPath
    }
    else {
      return path
    }
  }

  backStory(){
    this.router1.navigate([`story/${this.storyId}/page/${this.pageId}`])
  }

  onTabChange(event: any) {
    this.selectedPage = this.pages[event.index];
    this.pageId = this.selectedPage.id
    this.bgPageSelected = this.handlePath(this.selectedPage.background)
    this.router1.navigate([`story/${this.storyId}/preview/${this.pageId}`])
  }
}
