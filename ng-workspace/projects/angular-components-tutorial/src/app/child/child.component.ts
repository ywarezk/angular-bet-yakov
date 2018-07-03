import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  // @Input('message') messageFromParent: string;
  @Input() message: string;
  @Output('buttonClicked') actionToParent: EventEmitter<string> = new EventEmitter();

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    // input properties will be populated
    setTimeout(() => {
      this.actionToParent.emit('text message from child');

      this._todoService.arrayOfTodos.next(["hello", "from", "child"]);
    }, 2000);
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

}
