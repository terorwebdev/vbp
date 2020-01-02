import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from './../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin = false;

  constructor(
    private router: Router,
    private authenticationService: AuthService,
  ) { }

  ngOnInit() {
  }

  onClickSubmit(username, password) {

    if (this.authenticationService.authenticate(username, password)) {
      this.router.navigate(['']);
      this.invalidLogin = false;
    } else{
      this.invalidLogin = true;
    }

  }

}
