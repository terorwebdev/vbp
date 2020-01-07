import { Component, Optional, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StudentAuthService } from './../../service/student-auth.service';
import { AuthService } from './../../service/auth.service';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent implements OnInit {
  position = '';

  constructor(
    public StudentAuth: StudentAuthService,
    public MasterAuth: AuthService,
    public dialogRef: MatDialogRef<any>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    this.position = data;
  }

  ngOnInit() {

  }

  onSubmit(username, password) {
    if (this.data === 'Teacher') {
      let user = this.MasterAuth.authenticate(username, password);
      if (user) {
        this.dialogRef.close({ position: 'Teacher', status: 'success' });
      } else {
        console.log('Master wrong Info');
      }

    } else {
      let user = this.StudentAuth.authenticate(username, password);
      if (user) {
        this.dialogRef.close({ position: 'Student', status: 'success' });
      } else {
        console.log('Master wrong Info');
      }
    }
  }

}
