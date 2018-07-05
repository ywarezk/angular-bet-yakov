import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { DynamicComponentDirective } from './dynamic-component.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HeaderComponent,
    FooterComponent,
    GrandChildComponent,
    DynamicComponentDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  entryComponents: [ChildComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
