import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsincronoModule } from './asincrono/asincrono.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AsincronoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
