import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  @Output() bgImage: EventEmitter<any> = new EventEmitter();

  constructor() { }

  viewImg(item: any){
    this.bgImage.emit(item);
  }
}
