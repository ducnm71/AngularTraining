import { Component,  ElementRef, ViewChild, AfterViewInit, OnInit, HostListener, Input, Output, EventEmitter} from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PageService } from 'src/app/Services/page/page.service';

import { CanvasComponent } from './canvas/canvas.component';
import { TextComponent } from './text/text.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTabsModule, CommonModule, MatPaginatorModule, CanvasComponent, TextComponent]
})

export class PageComponent implements OnInit {
  storyId: any;
  pageId: any
  pages = [];
  idPageSelected: any
  bgPageSelected: any
  constructor(private router1: Router, private router2: ActivatedRoute, private pageService: PageService) {}

  backStory(){
    this.router1.navigate(['/story', this.storyId])
  }

  ngOnInit(): void {
    this.router2.paramMap.subscribe(params => {
      this.storyId = params.get('storyId')
      this.pageId = params.get('pageId')
    })

    this.pageService.getPages(this.storyId).subscribe(data => {
      this.pages = data
    })
  }

  selectedPage: any;

  onTabChange(event: any) {
    this.selectedPage = this.pages[event.index];
    this.pageId = this.selectedPage.id
    this.bgPageSelected = this.selectedPage.background
    this.router1.navigate([`story/${this.storyId}/page/${this.pageId}`])
  }


}
