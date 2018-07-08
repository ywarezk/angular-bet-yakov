import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gran1',
  templateUrl: './gran1.component.html',
  styleUrls: ['./gran1.component.css']
})
export class Gran1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log('timer on gran1');
    }, 2000);
  }

  isCD = () => {
    console.log('change detection on gran1');
  }

}
