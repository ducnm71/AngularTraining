import { AfterViewInit, Component, ViewChild, Input} from '@angular/core';
import { Router } from '@angular/router';



import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { PageService } from 'src/app/Services/page/page.service';
import { CommonModule } from '@angular/common';



export interface PeriodicElement {
  page_number: {
    number: number,
    page_id: number
 };

  content: {
    ID: number
    text_id: number,
    word_id: number,
    text: string
  };
  config: string;
  story_page_size: string
  story_page_color: string;
}


@Component({
  selector: 'app-page-content-story',
  templateUrl: './page-content-story.component.html',
  styleUrls: ['./page-content-story.component.css'],
  standalone: true,
  imports: [MatButtonModule,MatIconModule, MatTableModule, MatPaginatorModule, CommonModule],
})
export class PageContentStoryComponent implements AfterViewInit{
  @Input() id: any
  displayedColumns: string[] = ['Page number', 'Content', 'Config', 'Story page size', 'Story page color'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  @ViewChild(MatPaginator) paginator!: MatPaginator ;

  constructor(private router: Router, private pageService: PageService) {}

  firstPage: any

  ngOnInit(): void {
    this.pageService.getPages(this.id).subscribe(data => {
      this.dataSource.data = data
      this.firstPage = this.dataSource.data[0]
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  configObject(storyId: number){
    if(!this.firstPage){
      this.router.navigate([`story/${storyId}/page/xxx`])
    }else{

      this.router.navigate([`story/${storyId}/page/${this.firstPage.id}`])
    }
  }

}


