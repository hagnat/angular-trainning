/*
Every Angular component must be contained within an Angular module.
'root module' - minimum one Angular module file has to be in the root of application.

@ngModule - decorator to configure the module in our application
- 'imports' property
--- functionality needed to run our application in a browser
- 'declarations' property
--- we provide an array of the components that will be used in our application
- 'bootstrap' property
--- indicates the first component that will be loaded when our application starts up

*/
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FindTheJewelComponent }   from './find-the-jewel.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ FindTheJewelComponent ],
    bootstrap:    [ FindTheJewelComponent ]
})

export class AppModule { }