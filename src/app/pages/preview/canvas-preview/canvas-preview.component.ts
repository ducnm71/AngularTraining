import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { DataService } from 'src/app/Services/data.service';
import { TouchService } from 'src/app/Services/touch/touch.service';

import {MatButtonModule} from '@angular/material/button';
import { animate } from '@angular/animations';


@Component({
  selector: 'app-canvas-preview',
  templateUrl: './canvas-preview.component.html',
  styleUrls: ['./canvas-preview.component.css'],
  standalone: true,
  imports: [MatButtonModule]
})
export class CanvasPreviewComponent {

  @Input() bg: string = '';

  @ViewChild('canvasRef') canvasRef!: ElementRef<HTMLCanvasElement>
  @ViewChild('canvasRef2') canvasRef2!: ElementRef<HTMLCanvasElement>
  context!: CanvasRenderingContext2D
  context2!: CanvasRenderingContext2D

  private rectangles: any[] = [];
  page_id: any
  title: any
  syncText: any


  constructor(
    private router: Router,
    private router1: ActivatedRoute,
    private touchService: TouchService,
    private dataService: DataService){}

  public getAllTouch(page_id: any) {
    this.touchService.getAllTouch(page_id).subscribe(data => {
      this.rectangles = data
      this.title = this.rectangles.filter((item: any) => {
        return item.syncText !== null
      })
      this.syncText = JSON.parse(this.title[0].syncText)
      this.syncText = JSON.parse(this.syncText)
    })
  }


    // hehe = this.rectangles.filter((item: any) => {
    //   return item.text.split(' ').length >= 3
    // })

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
    // this.dataService.getTitle().subscribe(data => {
    //   this.title = data
    //   console.log(this.title);
    // })
    // this.dataService.clearTitle()
    this.getAllTouch(this.page_id)
  }

  ngAfterViewInit(): void {
    const canvasEl = this.canvasRef.nativeElement
    const canvasEl2 = this.canvasRef2.nativeElement
    this.context = canvasEl.getContext('2d')!
    this.context2 = canvasEl2.getContext('2d')!
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
  const canvasRect = this.canvasRef2.nativeElement.getBoundingClientRect()

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
    this.isTextVisible = true;
    this.drawText(clickedObject.text, clickedObject.point_x, clickedObject.point_y);
    this.playAudio(clickedObject.file);
  }

}

  isTextVisible: boolean = false

  private drawText(text: string, x: number, y: number) {
    // Xóa nội dung canvas cũ (nếu cần)
    if(this.isTextVisible) {

      this.context2.clearRect(0, 0, this.canvasRef2.nativeElement.width, this.canvasRef2.nativeElement.height);

      // Vẽ đoạn text tại vị trí đã cho
      // this.context2.fillStyle = 'black';
      this.context2.fillStyle = 'rgba(128, 128, 128, 0.7)'
      this.context2.fillRect(x - 15, y-60 , this.context2.measureText(text).width + 30, 100)
      // this.context2.fill()

      this.context2.fillStyle = 'black';
      this.context2.font = '35px Arial';
      this.context2.fillText(text, x, y);
    }

    // Đặt timeout để sau 2 giây đoạn text biến mất
    setTimeout(() => {
      this.isTextVisible = false;
      this.clearCanvas(this.context2, this.canvasRef2);
    }, 2000);
  }

  private playAudio(audioUrl: string) {
    const audio = new Audio('../../../../assets/audio/' + this.handlePath(audioUrl));
    audio.play();
  }

  private clearCanvas(ctx: any, cvr: any) {
    ctx.clearRect(0, 0, cvr.nativeElement.width, cvr.nativeElement.height);
  }

  currentIndex: number = 0;

  showTitle() {
    const x = 1015-this.context.measureText(this.title[0].text).width/2
    this.highlightTitle(x)
    this.playAudio(this.title[0].file)
  }

  highlightTitle(x: number){
    this.currentIndex = 0
    this.animateTitle(x)
  }

  animateTitle(x: number){
    if(this.currentIndex >= this.syncText.length){
      return
    }

    const currentWord = this.syncText[this.currentIndex]
    const startTime = Date.now()
    const animate = () => {
      const currentTime = Date.now()
      const timeRun = (currentTime - startTime) / (currentWord.e - currentWord.s)
      if(timeRun >= 1){
        this.clearCanvas(this.context, this.canvasRef)
        this.highlightingTitle(currentWord, x)
        this.currentIndex++

        if(this.currentIndex < this.syncText.length){
          this.animateTitle(x)
        }
      }else{
        this.clearCanvas(this.context, this.canvasRef)
        this.highlightingTitle(currentWord, x)
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }

  highlightingTitle(currentWord: any, x: number){
    this.context.font = '35px Arial';
    let currentX = x
    for(let i=0; i<this.syncText.length; i++){
      let word = this.syncText[i].w
      this.context.fillStyle = 'black';
      if (word === currentWord.w) this.context.fillStyle = 'red'
      this.context.fillText(word, currentX, 60);
      let wordWidth = this.context.measureText(word).width
      currentX += wordWidth + 10
    }
  }


}
