import { Component, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { CommonModule, NgIf, NgFor} from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

import {FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';

import { Router } from '@angular/router';
import { StoryService } from 'src/app/Services/story/story.service';
import { ToastrService } from 'ngx-toastr';
import { AddStoryComponent } from './add-story/add-story.component';


@Component({
  selector: 'app-list-story',
  templateUrl: './list-story.component.html',
  styleUrls: ['./list-story.component.css'],
  standalone: true,
  imports: [MatIconModule, MatTableModule, MatPaginatorModule, MatButtonModule, AddStoryComponent, CommonModule, MatFormFieldModule,
    MatInputModule, FormsModule, NgIf, MatDialogModule, ReactiveFormsModule, NgFor, MatRadioModule]
})
export class ListStoryComponent {
  displayedColumns: string[] = ['ID Stories', 'Thumbnail', 'Informations', 'Content', 'Actions'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataFake =  {story_id: 1, thumb: 'https://m.media-amazon.com/images/I/71kqnaiq6rL._AC_UF1000,1000_QL80_.jpg',
  informations: 1.0079, content: 'Who can tap the can?'}

  constructor(private router: Router,
    public storyService: StoryService,
    public dialog: MatDialog,
    private toastr: ToastrService
    ) {}

  public getStory(): void {
    this.storyService.listStory().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngOnInit(): void {
    this.getStory()
  }

  storyDetail(storyId: number){
    this.router.navigate(['/story', storyId])
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  handleFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //modal
  author: string = '';
  name: string ='';
  type: string = '';
  thumbnail: string = '';

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {author: this.author, name: this.name, thumbnail: this.thumbnail, type: this.type},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getStory()
    });
  }
  handleDeleleStory(storyId: any){
    this.storyService.deleteStory(storyId).subscribe(data => {
      this.getStory()
      this.toastr.success('Successfully!', 'Delete story');
    })
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, ReactiveFormsModule, MatRadioModule, NgFor],
})
export class DialogOverviewExampleDialog {

  typeOfStory: string[] = ['Truyện tĩnh', 'Truyện Icon', 'Truyện Animation']

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private storyService: StoryService,
    private toastr: ToastrService
  ) {
  }



  onNoClick(): void {
    this.dialogRef.close();
  }

  handleAddStory():void {
    this.storyService.createtStory(this.data).subscribe(data => {
        this.toastr.success('Successfully!', 'Add story');
  })
  }
}

export interface PeriodicElement {
  story_id: number;
  thumb: string;
  informations: number;
  content: string;
}

export interface DialogData {
  author: string
  name: string
  type: string
  thumbnail: string
}



