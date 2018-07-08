import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gran2',
  templateUrl: './gran2.component.html',
  styleUrls: ['./gran2.component.css']
})
export class Gran2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isCD = () => {
    console.log('change detection on gran2');
  }

  stamClick = () => {
    console.log('click event on gran2');
  }

}
