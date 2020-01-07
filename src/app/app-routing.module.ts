import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './nav/layout/layout.component';
import { InitComponent } from './nav/init/init.component';
import { LeftNavComponent } from './nav/left-nav/left-nav.component';
import { RightNavComponent } from './nav/right-nav/right-nav.component';
import { MainComponent } from './main/main.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const path = 'http://' + window.location.hostname + ':3000';

const config: SocketIoConfig = { url: path, options: {} };

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'init', component: InitComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'left', component: LeftNavComponent },
  { path: 'right', component: RightNavComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SocketIoModule.forRoot(config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
