import { Component, ViewChild, ViewContainerRef, OnInit, ComponentFactoryResolver, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { LaddaDirective } from './ladda.directive';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'app';
  laddaValue = false;

  constructor() {}

  ngAfterViewInit() {
  }
}
