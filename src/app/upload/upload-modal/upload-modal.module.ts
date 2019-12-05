import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadModalComponent } from './upload-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UploadModalComponent
  ],
  exports: [
    UploadModalComponent
  ]
})
export class UploadModalModule { }
