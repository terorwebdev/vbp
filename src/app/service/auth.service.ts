import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  init() {
    let user = sessionStorage.getItem('master-username');
    if (user === null || user === undefined) {
      sessionStorage.setItem('master-username', null);
    }
  }

  authenticate(username, password) {
    console.log(username + ' ' + password);
    if (username === 'master' && password === 'master') {
      sessionStorage.setItem('master-username', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('master-username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('master-username');
  }
}
