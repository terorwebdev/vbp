import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }

  getMessage() {
    return this.socket
      .fromEvent<any>('drawing')
      .pipe(map(data => data));
  }

  sendMessage(msg: any) {
    this.socket.emit('drawing', msg);
  }

}
