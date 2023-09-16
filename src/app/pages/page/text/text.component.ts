import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TouchService } from 'src/app/Services/touch/touch.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { ToastrService } from 'ngx-toastr';


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
  receivedData: string = '';

  constructor (private touchService: TouchService,
    private router: ActivatedRoute,
    private dataService: DataService,
    private toastr: ToastrService,
    ) {}

  path: any
  public getAllTouch() {
   this.touchService.getAllTouch(this.page_id).subscribe(data => {
    this.dataSource = data
  })
  }

  handlePath(path: any) {
    if (path.includes('fake') ){

      const newPath = path.replace(/^.*[\\\/]/, '')
      return newPath
    }
    else {
      return path
    }
  }



  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.page_id = params.get('pageId')
      this.getAllTouch()
    })
    this.dataService.getData().subscribe(data => {
      this.receivedData = data;
      if(this.receivedData === 'Update data'){
        this.getAllTouch()
      }
    });

    this.dataService.clearData();
  }

  handleDeleteTouch(touch_id: any) {
    this.touchService.deleteTouch(touch_id).subscribe(data => {
      this.getAllTouch()
      this.dataService.setData('Update data');
      this.toastr.success('Successfully!', 'Delete touch');
    })

  }


  displayedColumns: string[] = ['Text ID', 'Content', 'File Audio','Position', 'Touch', 'Actions'];
  dataSource = ELEMENT_DATA;
}
