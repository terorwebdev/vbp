import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  @Output() toggleLeft: EventEmitter<any> = new EventEmitter();
  @Output() toggleRight: EventEmitter<any> = new EventEmitter();
  @Output() toggleChatbox: EventEmitter<any> = new EventEmitter();
  @Output() lineColor: EventEmitter<any> = new EventEmitter();
  @Output() lineSize: EventEmitter<any> = new EventEmitter();
  @Output() lineStyle: EventEmitter<any> = new EventEmitter();
  @Output() openUpload: EventEmitter<any> = new EventEmitter();

  constructor() { }

  viewLeft() {
    this.toggleLeft.emit({});
  }

  viewRight() {
    this.toggleRight.emit({});
  }

  viewChatbox() {
    this.toggleChatbox.emit({});
  }

  viewUpload() {
    this.openUpload.emit({});
  }

  setLineColor(item: any) {
    this.lineColor.emit(item);
  }

  setLineSize(item: number) {
    this.lineSize.emit(item);
  }

  setLineStyle(item: string) {
    this.lineStyle.emit(item);
  }

}
