/*
Code that bootstraps the component.
Creates an instance of the component.

'bootstrapModule' method creates a new instance of AppModule component
 - 'AppModule' component initializes 'FindTheJewelComponent'
 - It does that by calling the component's constructor method and setting the starting values
*/
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);