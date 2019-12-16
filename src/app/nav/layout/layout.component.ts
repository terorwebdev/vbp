import { InitService } from './../../service/init.service';
import { LayoutService } from './../../service/layout.service';
import { Component, HostListener, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { SocketService } from '../../service/socket.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit, AfterViewInit {
  current: any = {
    lineStyle: 'round',
    fontSize: 5,
    color: 'black'
  };

  canvas: any;
  context: any;

  drawing = false;
  loadimage = false;

  constructor(
    private socketService: SocketService,
    private initService: InitService,
    private layoutService: LayoutService,
    private render: Renderer2
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.canvas.width = event.target.innerWidth;
    this.canvas.height = event.target.innerHeight;
  }

  initResize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  ngOnInit() {
    // To watch incomming socket message
    this.socketService
      .getMessage()
      .subscribe(msg => {
        console.log('Incoming msg', msg);
        // this.onDrawingEvent(msg);
        if (msg.type === 'bgImage') {
          this.onBGimgUpdate(msg, false);
        }

        if (msg.type === 'line') {
          // console.log(msg);
          this.onDrawingEvent(msg);
        }

      });

    this.socketService
      .getAuth()
      .subscribe(msg => {
        console.log('Incoming msg', msg);
      });

    this.socketService
      .getImage()
      .subscribe(msg => {
        console.log('Incoming Image', msg);
        // this.onDrawingEvent(msg);
        if (msg.type === 'bgImage') {
          this.onBGimgUpdate(msg, false);
        }

      });

    // To watch if color change
    this.initService.lineColor.subscribe(data => {
      console.log('lineColor : ', data);
      this.onColorUpdate(data);
    });

    // To watch if line size change
    this.initService.lineSize.subscribe(data => {
      console.log('lineColor : ', data);
      this.onFontSizeUpdate(data);
    });

    // To watch if line size change
    this.initService.lineStyle.subscribe(data => {
      console.log('lineColor : ', data);
      this.onLineStyleUpdate(data);
    });

    // To watch image
    this.layoutService.bgImage.subscribe(data => {
      console.log('Bg received : ', data);
      this.loadimage = true;
      this.onBGimgUpdate(data, true);
    });
  }

  sendMsg(msg: any) {
    this.socketService.sendMessage(msg);
  }

  initCanvas() {
    const classCanvas: any = document.querySelectorAll('.whiteboard');
    this.canvas = classCanvas[0];
    this.context = this.canvas.getContext('2d');
    this.context.fillStyle = '#000000';
    console.log(this.context);
  }

  ngAfterViewInit() {

    this.initCanvas();
    this.initResize();

    // Windows browser
    this.render.listen(this.canvas, 'mousedown', (target) => {
      console.log('mousedown', target);
      this.onMouseDown(target);
    });
    this.render.listen(this.canvas, 'mouseup', (target) => {
      console.log('mouseup', target);
      this.onMouseUp(target);
    });
    this.render.listen(this.canvas, 'mouseout', (target) => {
      // console.log('mouseout', target);
      this.onMouseUp(target);
    });
    this.render.listen(this.canvas, 'mousemove', (target) => {
      this.onMouseMove(target);
      // this.throttle(target, 10);
      // console.log('mousemove', target);
    });

    // Touch support for mobile devices
    this.render.listen(this.canvas, 'touchstart', (target) => {
      this.onMouseDown(target);
      // console.log('touchstart', target);
    });
    this.render.listen(this.canvas, 'touchcancel', (target) => {
      this.onMouseUp(target);
      // console.log('touchcancel', target);
    });
    this.render.listen(this.canvas, 'mouseout', (target) => {
      this.onMouseUp(target);
      // console.log('mouseout', target);
    });
    this.render.listen(this.canvas, 'touchmove', (target) => {
      this.onMouseMove(target);
      // console.log('mousemove', target);
    });

  }

  drawLine(x0: any, y0: any, x1: any, y1: any, color1: any, style: any, fontSize: any, emit: any) {
    console.log(x0, y0);
    this.context.beginPath();
    this.context.moveTo(x0, y0);
    this.context.lineTo(x1, y1);
    this.context.strokeStyle = color1;
    this.context.lineCap = style;
    this.context.lineWidth = fontSize;
    // this.context.globalCompositeOperation = 'destination-atop';
    this.context.stroke();
    this.context.closePath();

    if (!emit) { return; }
    const w = this.canvas.width;
    const h = this.canvas.height;

    this.sendMsg({
      type: 'line',
      x0: x0 / w,
      y0: y0 / h,
      x1: x1 / w,
      y1: y1 / h,
      color: color1,
      line_style: style,
      font_size: fontSize
    });
  }

  onDrawingEvent(data) {
    const w = this.canvas.width;
    const h = this.canvas.height;
    console.log(w);
    // console.log(data.x0, data.y0);
    this.drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color, data.line_style, data.font_size, false);
  }

  onMouseDown(e) {
    // console.log(e);
    this.drawing = true;
    this.current.x = e.clientX || e.touches[0].clientX;
    this.current.y = e.clientY || e.touches[0].clientY;
  }

  onMouseUp(e) {
    if (!this.drawing) { return; }
    this.drawing = false;
    this.drawLine(this.current.x, this.current.y, e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY, this.current.color, this.current.lineStyle, this.current.fontSize, true);
  }

  onMouseMove(e) {
    if (!this.drawing) { return; }
    this.drawLine(this.current.x, this.current.y, e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY, this.current.color, this.current.lineStyle, this.current.fontSize, true);
    this.current.x = e.clientX || e.touches[0].clientX;
    this.current.y = e.clientY || e.touches[0].clientY;
  }

  onFontSizeUpdate(e: number) {
    this.current.fontSize = e;
  }

  onColorUpdate(e: any) {
    // this.current.color = e.target.className.split(' ')[1];
    this.current.color = e.hex;
  }

  onLineStyleUpdate(e: string) {
    this.current.lineStyle = e;
  }

  onBGimgUpdate(e: any, emit) {
    const image = new Image();
    image.onload = () => {
      // this.context.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
      const top = this.canvas.height * 0.10;
      const left = this.canvas.width * 0.05;

      const imgHeight = this.canvas.height * 0.50;
      const imgWidth = this.canvas.width * 0.50;

      console.log( 'Top : ' + top);
      console.log( 'Left : ' + left);
      this.context.drawImage(image, left, top, imgWidth, imgHeight);
    };
    image.src = e.data;

    this.sendImage(e, emit);
  }

  sendImage(e, emit) {
    if (emit) {
      // this.sendMsg(e);
      this.socketService.sendImage(e);
    }
  }

}
