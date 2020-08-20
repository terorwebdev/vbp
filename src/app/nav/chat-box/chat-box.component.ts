import { Component, OnInit, ViewChild } from '@angular/core';
import { InitService } from '../../service/init.service';
import { SocketService } from '../../service/socket.service';
import { StatusPositionService } from '../../service/status-position.service';
import { HistoryService } from '../../service/history.service';
import { LayoutService } from '../../service/layout.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

export interface Msglist {
  name: string;
  msg: string;
}

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  
  msg_to_send: String = "";
  name: String = "";
  msg_list: Array<Msglist> = [];

  constructor(
    private initService: InitService,
    private historyService: HistoryService,
    private socketService: SocketService,
    private layoutService: LayoutService,
    private statusPositionService: StatusPositionService
  ) { 
    this.socketService
      .getMessage()
      .subscribe(msg => {
        console.log('Incoming Message', msg);
        this.msg_list.push(msg);
      });
  }

  @ViewChild('autosize', { static: false }) autosize: CdkTextareaAutosize;

  ngOnInit() {
  }

  toggle(): void {
    this.initService.viewChatbox();
  }
   send_msg() {
    console.log(this.statusPositionService.getusername()+ ' msg_to_send : '+ this.msg_to_send);

    let to_send_msg: Msglist = {
      name: this.statusPositionService.getusername(),
      msg: this.msg_to_send
    } as Msglist;
    
    this.msg_list.push(to_send_msg);
    this.socketService.sendMessage(to_send_msg);

    this.msg_to_send = "";
   }

}
