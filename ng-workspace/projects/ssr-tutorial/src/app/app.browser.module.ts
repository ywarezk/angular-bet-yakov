import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { LaddaDirective } from './ladda.directive';
import * as Ladda from 'ladda';

declare var window: any;

window.Ladda = Ladda;

@NgModule({
    declarations: [],
    imports: [AppModule],
    entryComponents: [],
    bootstrap: [AppComponent]
})
export class BrowserModule {

}