import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'

import { Router } from '@angular/router';

export interface PeriodicElement {
  page_number: {
    number: number,
    page_id: number
 };
  content: string;
  syncData: string;
  fileAudio: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {page_number: {number: 1, page_id: 14661},content: 'Who can tap the can?',
    syncData: '[{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360}]',
    fileAudio: 'H'},
  {page_number: {number: 1, page_id: 14661},content: 'Who can tap the can?',
    syncData: '[{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360}]',
    fileAudio: 'H'},
  {page_number: {number: 1, page_id: 14661},content: 'Who can tap the can?',
    syncData: '[{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360}]',
    fileAudio: 'H'},
  {page_number: {number: 1, page_id: 14661},content: 'Who can tap the can?',
    syncData: '[{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360}]',
    fileAudio: 'H'},
  {page_number: {number: 1, page_id: 14661},content: 'Who can tap the can?',
    syncData: '[{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360}]',
    fileAudio: 'H'},
  {page_number: {number: 1, page_id: 14661},content: 'Who can tap the can?',
    syncData: '[{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360}]',
    fileAudio: 'H'},
  {page_number: {number: 1, page_id: 14661},content: 'Who can tap the can?',
    syncData: '[{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360}]',
    fileAudio: 'H'},
  {page_number: {number: 1, page_id: 14661},content: 'Who can tap the can?',
    syncData: '[{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360}]',
    fileAudio: 'H'},
];


@Component({
  selector: 'app-text-page-content',
  templateUrl: './text-page-content.component.html',
  styleUrls: ['./text-page-content.component.css'],
  standalone: true,
  imports: [MatTableModule, MatIconModule]
})
export class TextPageContentComponent {

  constructor(private router: Router) {}

  displayedColumns: string[] = ['Page','Content', 'Sync data', 'File Audio', 'Actions'];
  dataSource = ELEMENT_DATA;

  textOfPage(){
    this.router.navigate(['/text'])
  }
}
