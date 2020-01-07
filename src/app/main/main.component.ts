import { Component, OnInit } from "@angular/core";
import { StatusPositionService } from "../service/status-position.service";
import { AuthService } from "../service/auth.service";
import { StudentAuthService } from "../service/student-auth.service";
import { MatDialog } from "@angular/material";
import { ModalUserComponent } from "../student/modal-user/modal-user.component";
import { Router } from '@angular/router';

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  constructor(
    private router: Router,
    public statusPosition: StatusPositionService,
    public authService: AuthService,
    public StudentAuth: StudentAuthService,
    public dialog: MatDialog
  ) {
    // this.statusPosition.init();
    // this.authService.init();
    // this.StudentAuth.init();
  }

  ngOnInit() {
    const pos = this.statusPosition.getPosition();
    if (pos === "Teacher") {
      const status = this.authService.isUserLoggedIn();
      if (status) {
        // route
        this.router.navigate(['init']);
        console.log("master route to layout");
      } else {
        // not route back
      }
    } else {
      // this.statusPosition.setPosition(result.position);
      const status = this.StudentAuth.isUserLoggedIn();
      if (status) {
        // route
        this.router.navigate(['init']);
        console.log("student route to layout");
      } else {
        // not route back
      }
    }
  }

  openDialog(status) {
    const dialogRef = this.dialog.open(ModalUserComponent, {
      data: status
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.statusPosition.setPosition(result.position);
      if (result.position === "Teacher") {
        // this.statusPosition.setPosition(result.position);
        const status = this.authService.isUserLoggedIn();
        if (status !== null) {
          // route
          this.router.navigate(['init']);
          console.log("route to layout");
        } else {
          // not route back
        }
      } else {
        // this.statusPosition.setPosition(result.position);
        const status = this.StudentAuth.isUserLoggedIn();
        if (status !== null) {
          // route
          this.router.navigate(['init']);
          console.log("route to layout");
        } else {
          // not route back
        }
      }
    });
  }
}
