import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from '../../app/app-routing.module';
import { MessagesComponent } from './components/messages/messages.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading.interceptor';



const COMPONENTS = [
  MessagesComponent,
  ToolbarComponent,
  PageNotFoundComponent,
  LoadingComponent
];

const MODULES = [
  AppRoutingModule,
  MaterialModule,
  FlexLayoutModule
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    MODULES
  ],
  exports: [
    COMPONENTS,
    MODULES
  ],
  providers:[
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ]
})
export default class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule ) {
    if (parentModule) {
      throw new Error("CoreModule has already been loaded. Import this module in AppModule")
    }

  }
}
