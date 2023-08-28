import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-page-content-story',
  templateUrl: './page-content-story.component.html',
  styleUrls: ['./page-content-story.component.css'],
  standalone: true,
  imports: [MatButtonModule,MatIconModule, MatTableModule, MatPaginatorModule],
})
export class PageContentStoryComponent implements AfterViewInit {
  displayedColumns: string[] = ['Page number', 'Content', 'Config', 'Story page size', 'Story page color'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator ;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

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

const ELEMENT_DATA: PeriodicElement[] = [
  {page_number: {number: 1, page_id: 14661}, content: {ID: 57522, text_id: 228837, word_id: 40021381, text: 'Who can tap the map'},
    config: 'full', story_page_size: '50', story_page_color: 'red'},
  {page_number: {number: 1, page_id: 14661}, content: {ID: 57522, text_id: 228837, word_id: 40021381, text: 'Who can tap the map'},
    config: 'full', story_page_size: '50', story_page_color: 'red'},
  {page_number: {number: 1, page_id: 14661}, content: {ID: 57522, text_id: 228837, word_id: 40021381, text: 'Who can tap the map'},
    config: 'full', story_page_size: '50', story_page_color: 'red'},
  {page_number: {number: 1, page_id: 14661}, content: {ID: 57522, text_id: 228837, word_id: 40021381, text: 'Who can tap the map'},
    config: 'full', story_page_size: '50', story_page_color: 'red'},
  {page_number: {number: 1, page_id: 14661}, content: {ID: 57522, text_id: 228837, word_id: 40021381, text: 'Who can tap the map'},
    config: 'full', story_page_size: '50', story_page_color: 'red'},
  {page_number: {number: 1, page_id: 14661}, content: {ID: 57522, text_id: 228837, word_id: 40021381, text: 'Who can tap the map'},
    config: 'full', story_page_size: '50', story_page_color: 'red'},
  {page_number: {number: 1, page_id: 14661}, content: {ID: 57522, text_id: 228837, word_id: 40021381, text: 'Who can tap the map'},
    config: 'full', story_page_size: '50', story_page_color: 'red'},
];
