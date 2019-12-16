import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './nav/layout/layout.component';
import { InitComponent } from './nav/init/init.component';
import { LeftNavComponent } from './nav/left-nav/left-nav.component';
import { RightNavComponent } from './nav/right-nav/right-nav.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

const routes: Routes = [
  { path: '', component: InitComponent },
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
