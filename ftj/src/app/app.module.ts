import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewJewelComponent } from './new-jewel/new-jewel.component';
import { HighlightDirective } from './highlight.directive';
import { JewelPipe } from './jewel.pipe';
import { JewelProviderService } from './jewel-provider.service';
import { ShowJewelComponent } from './show-jewel/show-jewel.component';
import { LocationComponent } from './location/location.component';

@NgModule({
    declarations: [
        AppComponent,
        NewJewelComponent,
        HighlightDirective,
        JewelPipe,
        ShowJewelComponent,
        LocationComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        JewelProviderService,
    ],
    bootstrap: [
        AppComponent,
    ]
})

export class AppModule { }
