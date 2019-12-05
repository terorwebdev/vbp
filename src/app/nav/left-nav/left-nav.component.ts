import { Component, OnInit } from '@angular/core';
import { InitService } from '../../service/init.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  fontSize = 5;

  colorList: any = [
    { name: 'black', hex: '#000000' },
    { name: 'silver', hex: '#c0c0c0' },
    { name: 'gray', hex: '#808080' },
    { name: 'white', hex: '#ffffff' },
    { name: 'maroon', hex: '#800000' },
    { name: 'red', hex: '#ff0000' },
    { name: 'purple', hex: '#800080' },
    { name: 'fuchsia', hex: '#ff00ff' },
    { name: 'green', hex: '#008000' },
    { name: 'lime', hex: '#00ff00' },
    { name: 'olive', hex: '#808000' },
    { name: 'yellow', hex: '#ffff00' },
    { name: 'navy', hex: '#000080' },
    { name: 'blue', hex: '#0000ff' },
    { name: 'teal', hex: '#008080' },
    { name: 'aqua', hex: '#00ffff' }
  ];

  initLineStyle = { option: 'round' };
  lineStyleList: any = [
    'round',
    'butt',
    'square'
  ];


  constructor(private initService: InitService) { }

  ngOnInit() {

  }

  toggle(): void {
    this.initService.viewLeft();
  }

  toggleColor(item: any): void {
    this.initService.setLineColor(item);
  }

  fontSizeChange(event: number): void {
    this.initService.setLineSize(event);
  }

  toggleLineStyle(event: string): void {
    this.initService.setLineStyle(event);
  }

}
