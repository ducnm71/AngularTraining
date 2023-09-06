import { Component,  ElementRef, ViewChild, AfterViewInit, OnInit, HostListener, Input, Output, EventEmitter} from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PageService } from 'src/app/Services/page/page.service';

import { CanvasComponent } from './canvas/canvas.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTabsModule, CommonModule, MatPaginatorModule, CanvasComponent]
})

export class PageComponent implements OnInit {
  storyId: any;
  pages = []
  constructor(private router1: Router, private router2: ActivatedRoute, private pageService: PageService) {}

  backStory(){
    this.router1.navigate(['/story', this.storyId])
  }

  ngOnInit(): void {
    this.router2.paramMap.subscribe(params => {
      this.storyId = params.get('storyId')
    })

    this.pageService.getPages(this.storyId).subscribe(data => {
      this.pages = data
    })
  }

  selectedPage: any;

  onTabChange(event: any) {
    this.selectedPage = this.pages[event.index];
  }


}
