import { NgModule }      from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

import { EnterLeaveComponent } from './components/enterleave/enterleave.component';
import { DifferenstatesComponent } from './components/differentstates/differentstates.component';

@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [ 
        AppComponent,
        EnterLeaveComponent,
        DifferenstatesComponent
    ],
    providers: [
        {
            provide: LocationStrategy, 
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [ 
        AppComponent 
    ]
})
export class AppModule { }
