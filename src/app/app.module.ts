import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SocketService } from './service/socket.service';
import { AppComponent } from './app.component';
import { LayoutComponent } from './nav/layout/layout.component';
import { InitComponent } from './nav/init/init.component';
import { LeftNavComponent } from './nav/left-nav/left-nav.component';
import { RightNavComponent } from './nav/right-nav/right-nav.component';

import { UploadViewComponent } from './upload/upload-view/upload-view.component';
import { UploadViewService } from './upload/upload-view/upload-view.service';

import { InitService } from './service/init.service';
import { LeftNavService } from './service/left-nav.service';
import { RightNavService } from './service/right-nav.service';
import { LayoutService } from './service/layout.service';

import { MyMaterialModule } from './material.module';
import { UploadModalModule } from './upload/upload-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LeftNavComponent,
    RightNavComponent,
    UploadViewComponent,
    InitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    UploadModalModule
  ],
  providers: [
    SocketService,
    InitService,
    LeftNavService,
    RightNavService,
    LayoutService,
    UploadViewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
