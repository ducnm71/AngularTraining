import { Component, ElementRef, ViewChild, HostListener, Input, Inject} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { TouchService } from 'src/app/Services/touch/touch.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule, MatFormFieldModule,
    MatInputModule, FormsModule, NgIf, MatDialogModule, ReactiveFormsModule],
})
export class CanvasComponent {
  @Input() bg: string = '';
  @ViewChild('canvasRef') canvasRef!: ElementRef<HTMLCanvasElement>
  context!: CanvasRenderingContext2D

  constructor(public dialog: MatDialog, private router: ActivatedRoute,){}
  hasTitle: boolean = false
  text: string = ''
  file: string = ''
  page_id: any
  change: boolean = false

  openTextModal():void {
    const dialogRef = this.dialog.open(TextModal, {
      data: {
        page_id: this.page_id,
        text: this.text,
        file: this.file,
        data: {
          x1: this.x1,
          y1: this.y1,
          x2: this.x2,
          y2: this.y2
        }
      }
    })

    dialogRef.afterClosed().subscribe(() => {
      this.change = true
    })
  }


  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.page_id = params.get('pageId')
    })
  }

  ngAfterViewInit(): void {
    // console.log(this.bg);
    const canvasEl = this.canvasRef.nativeElement
    // const context = canvasEl.getContext('2d')
    this.context = canvasEl.getContext('2d')!
 }

  @HostListener('dblclick', ['$event'])
  onDoubleClick = (e: any) => {
    if (e.target.id === 'canvasId'){
      this.write(e)
      this.openTextModal()
    }
  }

  write(res: any): any {
    const canvasEl = this.canvasRef.nativeElement
    const rect = canvasEl.getBoundingClientRect()
    const prePos = {
      pointX: res.clientX - rect.left,
      pointY: res.clientY- rect.top
    }
    console.log(prePos);

}

  private isDragging = false;
  private x1 = 0;
  private y1 = 0;
  private x2 = 0;
  private y2 = 0;
  private rectangles: any[] = [];

  handleMouseDown(event: MouseEvent):void {

    this.isDragging = true;
    this.x1 = event.clientX - this.canvasRef.nativeElement.getBoundingClientRect().left;
    this.y1 = event.clientY - this.canvasRef.nativeElement.getBoundingClientRect().top;
    // console.log(this.x1, this.y1);
  }

  handleMouseMove(event: MouseEvent):void {
    if (this.isDragging) {
      this.x2 = event.clientX - this.canvasRef.nativeElement.getBoundingClientRect().left;
      this.y2 = event.clientY - this.canvasRef.nativeElement.getBoundingClientRect().top;
      this.clearCanvas()
      this.drawRectangle();

      this.context.strokeRect(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
    }
  }

  handleMouseUp(event: MouseEvent):void {

    if(this.isDragging){
      this.isDragging = false;
      this.x2 = event.clientX - this.canvasRef.nativeElement.getBoundingClientRect().left;
      this.y2 = event.clientY - this.canvasRef.nativeElement.getBoundingClientRect().top;

      const rect = {
        x1: this.x1,
        y1: this.y1,
        x2: this.x2,
        y2: this.y2
      }
      this.rectangles.push(rect)
      this.drawRectangle()
      this.openTextModal()
      // this.logRectangleCoordinates();
      // console.log(this.rectangles);

    }
  }

  drawRectangle():void {
    // this.context.beginPath();
    this.rectangles.forEach(rect => {

      this.context.strokeRect(rect.x1, rect.y1, rect.x2 - rect.x1, rect.y2 - rect.y1);

    })
    // this.context.stroke();
  }

  clearCanvas():void {
    this.context.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
  }

  logRectangleCoordinates():void {
    const touch = {
      x1: this.x1,
      y1: this.y1,
      x2: this.x2,
      y2: this.y2
    }
    console.log(touch);
  }


  undo() {
    if (this.rectangles.length > 0) {
      this.rectangles.pop();
      this.clearCanvas();
      this.drawRectangle();
    }
  }

  clearAll(){
    this.rectangles = []
    this.clearCanvas()
  }
}


@Component({
  selector: 'text-modal',
  templateUrl: './text-modal.html',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, ReactiveFormsModule],
})

export class TextModal {
  constructor(
    public dialogRef: MatDialogRef<TextModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private touchService: TouchService,
    private toastr: ToastrService
  ){}

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleAddText():void {
    let newData = {...this.data}
    delete newData.page_id
    this.touchService.addTouch(this.data.page_id, newData).subscribe(result => {
      this.toastr.success('Successfully!', 'Add text');
      // window.location.reload()
    })
  }
}

export interface DialogData {
  page_id: any,
  text: string
  file: string,
  data: {
    x1: number,
    y1: number,
    x2: number,
    y2: number
  }
}
