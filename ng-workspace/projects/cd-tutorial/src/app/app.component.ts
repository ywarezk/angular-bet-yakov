import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  stamObject = {
    message: 'hello'
  }

  constructor(private _zone: NgZone) {}

  ngOnInit() {
    setTimeout(() => {
      console.log('changing the input');
      // this.stamObject = {
      //   message: 'world'
      // }

      // this.stamObject['message'] = 'foo bar';
      this.stamObject = {
        ...this.stamObject,
        message: 'foo bar'
      }
    }, 2000)
  }

  isCD = () => {
    console.log('change detection on app component');
  }
}
