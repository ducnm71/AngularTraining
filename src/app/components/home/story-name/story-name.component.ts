import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-story-name',
  templateUrl: './story-name.component.html',
  styleUrls: ['./story-name.component.css'],
  standalone: true,
  imports: [MatButtonModule,MatIconModule, MatMenuModule],
})
export class StoryNameComponent {

}
