import { Component, OnInit } from '@angular/core';
import { UploadModalService } from '../upload-modal';
import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'app-upload-view',
  templateUrl: './upload-view.component.html',
  styleUrls: ['./upload-view.component.css']
})
export class UploadViewComponent implements OnInit {

  public imagePath;
  imgURL: any;
  public message: string;

  constructor(
    private modalService: UploadModalService,
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
  }

  preview(files) {
    console.log(files);
    if (files.length === 0) {
      return;
    }

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;

    console.log(this.imagePath);

    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      console.log(reader);
    };
  }

  addBGimage(item: any) {
    this.layoutService.viewImg({type: 'bgImage', data: this.imgURL});
    this.closeModal('custom-modal-1');
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.imagePath = '';
    this.imgURL = '';

    this.modalService.close(id);
  }

}
