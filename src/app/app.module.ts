import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SocketService } from './service/socket.service';
import { AppComponent } from './app.component';
import { LayoutComponent } from './nav/layout/layout.component';
import { InitComponent } from './nav/init/init.component';
import { LeftNavComponent } from './nav/left-nav/left-nav.component';
import { RightNavComponent } from './nav/right-nav/right-nav.component';
import { MainComponent } from './main/main.component';

import { UploadViewComponent } from './upload/upload-view/upload-view.component';
import { UploadViewService } from './upload/upload-view/upload-view.service';

import { InitService } from './service/init.service';
import { LeftNavService } from './service/left-nav.service';
import { RightNavService } from './service/right-nav.service';
import { LayoutService } from './service/layout.service';
import { AuthService } from './service/auth.service';
import { ViewsService } from './service/views.service';

import { MyMaterialModule } from './material.module';
import { UploadModalModule } from './upload/upload-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MasterComponent } from './master/master.component';
import { LoginComponent } from './master/login/login.component';

import { StudentAuthService } from './service/student-auth.service';
import { StudentComponent } from './student/student.component';
import { ModalUserComponent } from './student/modal-user/modal-user.component';

import { StatusPositionService } from './service/status-position.service';

import { HistoryService } from './service/history.service';

// db connection
import { ConnService } from './db/conn.service';
import { ChatBoxComponent } from './nav/chat-box/chat-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LayoutComponent,
    LeftNavComponent,
    RightNavComponent,
    UploadViewComponent,
    InitComponent,
    MasterComponent,
    LoginComponent,
    StudentComponent,
    ChatBoxComponent,

    ModalUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    UploadModalModule
  ],
  providers: [
    // db
    ConnService,
    // socket
    SocketService,
    // master
    AuthService,
    // current view
    ViewsService,
    // what position master/student
    StatusPositionService,
    // student
    StudentAuthService,

    // history
    HistoryService,

    InitService,
    LeftNavService,
    RightNavService,
    LayoutService,
    UploadViewService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalUserComponent
  ]
})
export class AppModule { }
