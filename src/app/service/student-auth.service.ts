import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class StudentAuthService {

  constructor(
    public socketService: SocketService
    ) { }

    init() {
      let user = sessionStorage.getItem('student-username');
      if (user === null || user === undefined) {
        sessionStorage.setItem('student-username', null);
      }
    }

  authenticate(username, password) {
    if (username !== '' && password === 'student') {
      sessionStorage.setItem('student-username', username);
      this.masterConnect();
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('student-username');
    console.log(!(user === null));
    return !(user === null);
  }

  user() {
    return sessionStorage.getItem('student-username');
  }

  masterConnect() {
    let user = sessionStorage.getItem('student-username');
    this.socketService.sendMasterMessage({student_auth: user});
  }

  logOut() {
    sessionStorage.removeItem('student-username');
  }
}
