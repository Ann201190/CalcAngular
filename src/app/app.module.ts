import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';// для двухсторонней привязки
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule// для двухсторонней привязки
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
