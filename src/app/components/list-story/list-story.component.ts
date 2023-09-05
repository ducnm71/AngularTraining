import { Component, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';

import { Router } from '@angular/router';
import { StoryService } from 'src/app/Services/story/story.service';
import { AddStoryComponent } from './add-story/add-story.component';


@Component({
  selector: 'app-list-story',
  templateUrl: './list-story.component.html',
  styleUrls: ['./list-story.component.css'],
  standalone: true,
  imports: [MatIconModule, MatTableModule, MatPaginatorModule, MatButtonModule, AddStoryComponent, CommonModule, MatFormFieldModule,
    MatInputModule, FormsModule, NgIf, MatDialogModule]
})
export class ListStoryComponent {
  displayedColumns: string[] = ['ID Stories', 'Thumbnail', 'Informations', 'Content', 'Actions'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataFake =  {story_id: 1, thumb: 'https://m.media-amazon.com/images/I/71kqnaiq6rL._AC_UF1000,1000_QL80_.jpg',
  informations: 1.0079, content: 'Who can tap the can?'}

  constructor(private router: Router, private storyService: StoryService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.storyService.listStory().subscribe(data => {
      this.dataSource = data
    })
  }

  storyDetail(): void{
    this.router.navigate(['/home'])
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //modal
  author: string = '';
  content: string ='';


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {name: this.author, animal: this.content},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.content = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface PeriodicElement {
  story_id: number;
  thumb: string;
  informations: number;
  content: string;
}

export interface DialogData {
  animal: string;
  name: string;
}



