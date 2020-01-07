import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusPositionService {

  constructor() { }

  init() {
    let position = sessionStorage.getItem('status-position');
    if (position === null || position === undefined) {
      sessionStorage.setItem('status-position', null);
    }
  }

  getPosition() {
    return sessionStorage.getItem('status-position');
  }

  setPosition(position) {
    sessionStorage.setItem('status-position', position);
    return this.getPosition();
  }
}
