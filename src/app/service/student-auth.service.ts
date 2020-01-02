import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class StudentAuthService {

  constructor(
    public socketService: SocketService
    ) { }

  authenticate(username, password) {
    if (username !== '' && password === 'student') {
      sessionStorage.setItem('username', username);
      this.masterConnect();
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('student_username');
    console.log(!(user === null));
    return !(user === null);
  }

  masterConnect() {
    let user = sessionStorage.getItem('student_username');
    this.socketService.sendStudent({student_auth: user});
  }

  logOut() {
    sessionStorage.removeItem('student_username');
  }
}
