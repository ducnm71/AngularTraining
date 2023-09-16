import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { TouchService } from 'src/app/Services/touch/touch.service';

@Component({
  selector: 'app-canvas-preview',
  templateUrl: './canvas-preview.component.html',
  styleUrls: ['./canvas-preview.component.css'],
  standalone: true
})
export class CanvasPreviewComponent {

  @Input() bg: string = '';

  @ViewChild('canvasRef') canvasRef!: ElementRef<HTMLCanvasElement>
  context!: CanvasRenderingContext2D

  private rectangles: any[] = [];
  page_id: any
  title: any

  constructor(
    private router: Router,
    private router1: ActivatedRoute,
    private touchService: TouchService){}

  public getAllTouch(page_id: any) {
    this.touchService.getAllTouch(page_id).subscribe(data => {
      this.rectangles = data
    })
  }

  ngOnInit(): void {
    this.restartOnInit()
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.restartOnInit();
      }
    });
  }
  restartOnInit() {
    this.router1.paramMap.subscribe(params => {
      this.page_id = params.get('pageId')
    })
    this.getAllTouch(this.page_id)
  }

  ngAfterViewInit(): void {
    const canvasEl = this.canvasRef.nativeElement
    this.context = canvasEl.getContext('2d')!

    // this.context.fillStyle = 'blue'
    // this.context.strokeRect(50, 50, 100, 50)
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

 text(event: MouseEvent){
  const canvasRect = this.canvasRef.nativeElement.getBoundingClientRect()

  const x = event.clientX - canvasRect.left;
  const y = event.clientY - canvasRect.top;
  const clickedObject = this.rectangles.find(obj => (
    x >= obj.data.x1 &&
    x <= obj.data.x2 &&
    y >= obj.data.y1 &&
    y <= obj.data.y2
  ));

  if (clickedObject) {
    // Nếu có đối tượng thỏa mãn, hiển thị văn bản trên canvas và phát âm thanh
    this.drawText(clickedObject.text, clickedObject.point_x, clickedObject.point_y);
    this.playAudio(clickedObject.file);
  }

}

  isTextVisible: boolean = false

  private drawText(text: string, x: number, y: number) {
    // Xóa nội dung canvas cũ (nếu cần)
    this.context.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);

    // Vẽ đoạn text tại vị trí đã cho
    this.context.fillStyle = 'black';
    this.context.font = '35px Arial';
    this.context.fillText(text, x, y);

    this.isTextVisible = true;

    // Đặt timeout để sau 2 giây đoạn text biến mất
    setTimeout(() => {
      this.clearCanvas();
      this.isTextVisible = false;
    }, 2000);
  }

  private playAudio(audioUrl: string) {
    const audio = new Audio('../../../../assets/audio/' + this.handlePath(audioUrl));
    audio.play();
  }

  private clearCanvas() {
    this.context.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
  }
}
