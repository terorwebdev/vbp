import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }

  getDrawingMessage() {
    return this.socket
      .fromEvent<any>('drawing')
      .pipe(map(data => data));
  }

  getAuthMaster() {
    return this.socket
      .fromEvent<any>('auth-master')
      .pipe(map(data => data));
  }

  getAuthStudent() {
    return this.socket
      .fromEvent<any>('auth-student')
      .pipe(map(data => data));
  }

  getImage() {
    return this.socket
      .fromEvent<any>('image')
      .pipe(map(data => data));
  }

  sendDrawingMessage(msg: any) {
    this.socket.emit('drawing', msg);
  }

  sendStudentMessage(msg: any) {
    this.socket.emit('auth-student', msg);
  }

  sendMasterMessage(msg: any) {
    this.socket.emit('auth-master', msg);
  }

  sendImage(msg: any) {
    this.socket.emit('image', msg);
  }

}
