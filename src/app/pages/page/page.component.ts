import { Component,  ElementRef, ViewChild, AfterViewInit, OnInit, HostListener, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
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

  pages = []
  constructor(private router: Router, private pageService: PageService) {}

  backStory(){
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.pageService.getPages().subscribe(data => {
      this.pages = data
    })
  }

  selectedPage: any;

  onTabChange(event: any) {
    this.selectedPage = this.pages[event.index];
  }


}
