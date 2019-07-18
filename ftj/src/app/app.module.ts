import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewJewelComponent } from './new-jewel/new-jewel.component';
import { HighlightDirective } from './highlight.directive';
import { JewelPipe } from './jewel.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewJewelComponent,
    HighlightDirective,
    JewelPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
