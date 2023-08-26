import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


export interface PeriodicElement {
  content: string;
  text_id: number;
  file_audio: string;
  sync_data: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {text_id: 1, content: 'Hydrogen', sync_data: '', file_audio: '1.mp3'},
  {text_id: 2, content: 'Helium', sync_data: '', file_audio: '1.mp3' },
  {text_id: 3, content: 'Lithium',sync_data: '',  file_audio: '1.mp3'},
  {text_id: 4, content: 'Beryllium',sync_data: '',  file_audio: '1.mp3'},
  {text_id: 5, content: 'Boron',sync_data: '',  file_audio: '1.mp3'},
  {text_id: 6, content: 'Carbon',sync_data: '',  file_audio: '1.mp3'},
  {text_id: 7, content: 'Nitrogen',sync_data: '',  file_audio: '1.mp3'},
  {text_id: 8, content: 'Oxygen',sync_data: '',  file_audio: '1.mp3'},
  {text_id: 9, content: 'Fluorine',sync_data: '',  file_audio: '1.mp3'},
  {text_id: 10, content: 'Neon',sync_data: '',  file_audio: '1.mp3'},
  {text_id: 6, content: 'Carbon',sync_data: '',  file_audio: '1.mp3'},
  {text_id: 7, content: 'Nitrogen',sync_data: '',  file_audio: '1.mp3'},
  {text_id: 8, content: 'Oxygen',sync_data: '',  file_audio: '1.mp3'},
  {text_id: 9, content: 'Fluorine',sync_data: '',  file_audio: '1.mp3'},
];

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule
  ]
})
export class TextComponent {
  displayedColumns: string[] = ['text_id', 'content', 'sync_data','file_audio', 'action'];
  dataSource = ELEMENT_DATA;
}
