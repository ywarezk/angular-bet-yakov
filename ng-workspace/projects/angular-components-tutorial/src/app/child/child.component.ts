import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ContentChild, AfterContentInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { GrandChildComponent } from '../grand-child/grand-child.component';

@Component({
  selector: 'app-child', // [app-child] // .app-child
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  exportAs: 'nameDefinedInChild'
})
export class ChildComponent implements OnInit, OnChanges, AfterContentInit {
  // @Input('message') messageFromParent: string;
  @Input() message: string;
  @Output('buttonClicked') actionToParent: EventEmitter<string> = new EventEmitter();
  @ContentChild(GrandChildComponent) granChild: GrandChildComponent;

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


  sayHello = () => {
    return 'hello from child'
  }

  public ngAfterContentInit() {
    // properties with content child will be populated
    // the view of the components in ng content will be filled with data bound properties
  }

}
