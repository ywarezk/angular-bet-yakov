import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component implements OnInit {
  @Input('objectInput') public isObjectTriggerCD: any
  public serverRequest: Observable<any>;

  constructor(private _http: HttpClient, private _cd: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      console.log('timer on child2');
    }, 1000);

    this._http.get('https://nztodo.herokuapp.com/api/task/?format=json').subscribe(() => {
      console.log('is on push running on server request?');
      // this._cd.markForCheck();
      // this._cd.detectChanges();
    }, () => {
      console.log('is on push running on server request?');
    });
    // console.log('calling the server');

    this.serverRequest = this._http.get('https://nztodo.herokuapp.com/api/task/?format=json');
  }

  isCD = () => {
    console.log('change detection on child2');
  }

  stamClick = () => {
    console.log('click event on child2');
  }
}
