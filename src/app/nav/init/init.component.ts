import { Component, OnInit } from '@angular/core';
import { InitService } from '../../service/init.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  show = false;
  constructor(
    private initService: InitService
  ) {
    this.initService.toggleLeft.subscribe(data => {
      console.log('clicked');
      this.toggle();
    });
  }

  ngOnInit() {
  }

  toggle() {
    this.show = !this.show;
  }

}
