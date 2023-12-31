import { Component,  OnInit,  Input, Output, Inject, ViewChild} from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import {FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';


import { PageService } from 'src/app/Services/page/page.service';
import { StoryService } from 'src/app/Services/story/story.service';

import { CanvasComponent } from './canvas/canvas.component';
import { TextComponent } from './text/text.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTabsModule, CommonModule, MatPaginatorModule, CanvasComponent, TextComponent,
    MatFormFieldModule, MatInputModule, FormsModule, NgIf, MatDialogModule, ReactiveFormsModule, MatMenuModule]
})

export class PageComponent implements OnInit {
  storyId: any
  storyName: any
  pageId: any
  pages = []
  selectedPage: any
  idPageSelected: any
  bgPageSelected: any

  page_number: number = 0
  background: string = ''

  constructor(private router1: Router,
    private storyService: StoryService,
    private router2: ActivatedRoute,
    private pageService: PageService,
    public dialog: MatDialog,
    private toastr: ToastrService,
    ) {}

    openDialog(): void {
      const dialogRef = this.dialog.open(PageModal, {
        data: {storyId: this.storyId, page_number: this.page_number , background: this.background},
      });

      dialogRef.afterClosed().subscribe(result => {
        this.getPages(this.storyId)
      });
    }

  backStory(){
    this.router1.navigate(['/story', this.storyId])
  }

  preview() {
    this.router1.navigate([`/story/${this.storyId}/preview/${this.pageId}`])
  }

  getStoryName(storyId: any) {
    this.storyService.detailStory(storyId).subscribe(data => {
      this.storyName = data.name
    })
  }

  getPages(storyId: any) {
    this.pageService.getPages(storyId).subscribe(data => {
      this.pages = data
    })
  }

  ngOnInit(): void {
    this.router2.paramMap.subscribe(params => {
      this.storyId = params.get('storyId')
      this.pageId = params.get('pageId')
    })

    this.getStoryName(this.storyId)
    this.getPages(this.storyId)
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

  onTabChange(event: any) {
    this.selectedPage = this.pages[event.index];
    this.pageId = this.selectedPage.id
    this.bgPageSelected = this.handlePath(this.selectedPage.background)
    this.router1.navigate([`story/${this.storyId}/page/${this.pageId}`])
  }

  removePage(id: any) {
    this.pageService.removePage(id).subscribe(data => {
      this.getPages(this.storyId)
      this.toastr.success('Successfully!', 'Remove page');
    })
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './pageModal.html',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, ReactiveFormsModule],
})
export class PageModal {

  storyId: any

  constructor(
    public dialogRef: MatDialogRef<PageModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private pageService: PageService,
    private toastr: ToastrService,
    private router: ActivatedRoute
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleAddPage():void {
    let newData = {...this.data}
    delete newData.storyId
    this.pageService.addPage(this.data.storyId, newData).subscribe(data => {
      this.toastr.success('Successfully!', 'Add page');
    })
  }

}


export interface DialogData {
  storyId: any
  page_number: number
  background: string
}
