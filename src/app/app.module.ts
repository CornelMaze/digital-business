import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
