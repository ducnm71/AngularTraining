import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TouchService } from 'src/app/Services/touch/touch.service';
import { ActivatedRoute } from '@angular/router';


export interface PeriodicElement {
  content: string;
  text_id: number;
  file_audio: string;
  position: string;
  touch: string
}

const ELEMENT_DATA: PeriodicElement[] = [];

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
export class TextComponent implements OnInit {

  @Input() page_id: any;

  constructor (private touchService: TouchService, private router: ActivatedRoute) {}

  public getAllTouch() {
   this.touchService.getAllTouch(this.page_id).subscribe(data => {
    this.dataSource = data
  })
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.page_id = params.get('pageId')
      this.getAllTouch()
    })
  }


  displayedColumns: string[] = ['Text ID', 'Content', 'File Audio','Position', 'Touch', 'Actions'];
  dataSource = ELEMENT_DATA;
}
