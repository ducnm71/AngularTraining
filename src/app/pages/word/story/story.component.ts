import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  storyName: string;
  syncData: string;
  fileAudio: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {storyName: 'Who can tap the can?',
    syncData: '[{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360},{"w":"Who","ts":0,"ts":2,"s":0,"e":360}]',
    fileAudio: 'H'},
];


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  standalone: true,
  imports: [MatTableModule]
})
export class StoryComponent {

  displayedColumns: string[] = ['Story Name', 'Sync data', 'File Audio', 'Actions'];
  dataSource = ELEMENT_DATA;
}
