import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'

import { Router } from '@angular/router';
import { PageService } from 'src/app/Services/page/page.service';

export interface PeriodicElement {
  page_number: {
    number: number,
    page_id: number
 };
  content: string;
  syncData: string;
  fileAudio: string;
}


@Component({
  selector: 'app-text-page-content',
  templateUrl: './text-page-content.component.html',
  styleUrls: ['./text-page-content.component.css'],
  standalone: true,
  imports: [MatTableModule, MatIconModule]
})
export class TextPageContentComponent {

  constructor(private router: Router, private pageService: PageService) {}

  displayedColumns: string[] = ['Page','Content', 'Sync data', 'File Audio', 'Actions'];
  dataSource: PeriodicElement[] = [];

  dataFake = {page_number: {number: 1, page_id: 14661},content: 'Who can tap the can?',
    syncData: '[{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360}]',
    fileAudio: 'H'}

  ngOnInit(): void {
    this.pageService.getPages().subscribe(data => {
    this.dataSource = data
    })
  }

  textOfPage(): void{
    this.router.navigate(['/text'])
  }
}
