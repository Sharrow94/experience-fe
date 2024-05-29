import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarTopComponent } from './navbar/navbar-top/navbar-top.component';
import { NavbarSideComponent } from './navbar/navbar-side/navbar-side.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CvComponent } from './cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    NavbarSideComponent,
    CvComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
