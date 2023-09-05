import { Component, ElementRef, ViewChild, HostListener, Input} from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
})
export class CanvasComponent {
  @Input() bg: string = '';
  @ViewChild('canvasRef') canvasRef!: ElementRef<HTMLCanvasElement>

  ngOnInit(): void {

  }

  // context!: CanvasRenderingContext2D
  // points: Array<any> = []
  context: any


  ngAfterViewInit(): void {
    const canvasEl = this.canvasRef.nativeElement
    const context = canvasEl.getContext('2d')
    this.context = context
    // console.log(this.context);
 }

  @HostListener('click', ['$event'])
  onClick = (e: any) => {
    if (e.target.id === 'canvasId'){
    this.write(e)
    }
  }

  // render(): any {
  //   const canvasEl: HTMLCanvasElement = this.canvasRef.nativeElement
  //   this.context = canvasEl.getContext('2d')
  // }

  write(res: any): any {
    const canvasEl = this.canvasRef.nativeElement
    const rect = canvasEl.getBoundingClientRect()
    const prePos = {
      pointX: res.clientX - rect.left,
      pointY: res.clientY- rect.top
    }
    // console.log(prePos);

}

  private isDragging = false;
  private startX = 0;
  private startY = 0;
  private endX = 0;
  private endY = 0;
  private rectangles: any[] = [];

  handleMouseDown(event: MouseEvent):void {
    this.isDragging = true;
    this.startX = event.clientX - this.canvasRef.nativeElement.getBoundingClientRect().left;
    this.startY = event.clientY - this.canvasRef.nativeElement.getBoundingClientRect().top;
  }

  handleMouseMove(event: MouseEvent):void {
    if (this.isDragging) {
      this.endX = event.clientX - this.canvasRef.nativeElement.getBoundingClientRect().left;
      this.endY = event.clientY - this.canvasRef.nativeElement.getBoundingClientRect().top;
      this.clearCanvas()
      this.drawRectangle();

      this.context.strokeRect(this.startX, this.startY, this.endX - this.startX, this.endY - this.startY);
    }
  }

  handleMouseUp(event: MouseEvent):void {
    if(this.isDragging){
      this.isDragging = false;
      this.endX = event.clientX - this.canvasRef.nativeElement.getBoundingClientRect().left;
      this.endY = event.clientY - this.canvasRef.nativeElement.getBoundingClientRect().top;

      const rect = {
        x1: this.startX,
        y1: this.startY,
        x2: this.endX,
        y2: this.endY
      }
      this.rectangles.push(rect)
      this.drawRectangle()

      // this.logRectangleCoordinates();
      console.log(this.rectangles);

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
      x1: this.startX,
      y1: this.startY,
      x2: this.endX,
      y2: this.endY
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
