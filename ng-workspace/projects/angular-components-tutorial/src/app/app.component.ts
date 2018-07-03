import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _todoService: TodoService) {}

  public ngOnInit() {
    this._todoService.arrayOfTodos.subscribe(() => {
      console.log('message ferom parent');
    });
  }
}
