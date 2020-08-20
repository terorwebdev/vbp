import { Component, OnInit } from '@angular/core';
import { InitService } from '../../service/init.service';
import { AuthService } from '../../service/auth.service';
import { StudentAuthService } from '../../service/student-auth.service';
import { StatusPositionService } from '../../service/status-position.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  showLeft = false;
  showRight = false;
  showChatBox = false;
  position = 'Teacher';

  constructor(
    private router: Router,
    public statusPosition: StatusPositionService,
    public authService: AuthService,
    public StudentAuth: StudentAuthService,
    private initService: InitService
  ) {
    this.initService.toggleLeft.subscribe(data => {
      console.log('clicked');
      this.toggleLeft();
    });

    this.initService.toggleRight.subscribe(data => {
      console.log('clicked');
      this.toggleRight();
    });

    this.initService.toggleChatbox.subscribe(data => {
      console.log('clicked');
      this.toggleChatbox();
    });
  }

  ngOnInit() {
    this.position = this.statusPosition.getPosition();

    if (this.position === "Teacher") {
      const status = this.authService.isUserLoggedIn();
      if (status) {
        // route
      } else {
        // not route back
        this.router.navigate(['']);
        console.log("route to layout");
      }
    } else {
      // this.statusPosition.setPosition(result.position);
      const status = this.StudentAuth.isUserLoggedIn();
      if (status) {
        // route
        this.StudentAuth.masterConnect();
      } else {
        // not route back
        this.router.navigate(['']);
        console.log("route to layout");
      }
    }
  }

  toggleLeft() {
    this.showLeft = !this.showLeft;
  }

  toggleRight() {
    this.showRight = !this.showRight;
  }

  toggleChatbox() {
    this.showChatBox = !this.showChatBox;
  }

}
