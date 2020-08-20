import { Component, OnInit } from '@angular/core';
import { InitService } from '../../service/init.service';
import { SocketService } from '../../service/socket.service';
import { HistoryService } from '../../service/history.service';
import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.css']
})
export class RightNavComponent implements OnInit {

  studentList: any = [];

  constructor(
    private initService: InitService,
    private historyService: HistoryService,
    private socketService: SocketService,
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.socketService
      .getAuthMaster()
      .subscribe(msg => {
        console.log('Incoming Master msg', msg);
        this.addStudentList(msg.student_auth);
      });

    this.socketService.sendStudentMessage({type: 'reconnect'});
  }

  addStudentList(name1) {
    const list = this.studentList.filter(item => item.name === name1);
    if (list.length === 0){
      this.studentList.push({name: name1, allow: false});
    } else {
      console.log(name1 + ' Duplicate');
    }
  }

  onChange(item) {
    this.socketService.sendStudentMessage(item);
  }

  downloadimage() {
    this.layoutService.to_download();
  }

  toggle(): void {
    this.initService.viewRight();
  }

  openUpload() {
    this.initService.viewUpload();
  }

  allowAll() {
    for (const item of this.studentList) {
      item.allow = true;
      this.socketService.sendStudentMessage(item);
    }
  }

  disAllowAll() {
    for (const item of this.studentList) {
      item.allow = false;
      this.socketService.sendStudentMessage(item);
    }
  }

  clearLayout() {
    this.historyService.clearHistory().subscribe((data: any) => {
      console.log(data);
      this.socketService.sendDrawingMessage({type: 'ReloadWindow'});
      document.location.reload();
    });

  }

}
