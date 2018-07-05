import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
import { TodoService } from './todo.service';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  @ViewChild('instanceOfChild') child: ChildComponent; 
  // @ViewChild(ChildComponent) child1: ChildComponent; 
  @ViewChildren(ChildComponent) allOfChildComponents;
  @ViewChild('divContainerForComponent', {read: ViewContainerRef}) containerForDynamicComponent: ViewContainerRef;

  constructor(private _todoService: TodoService, private _factoryResolver: ComponentFactoryResolver) {}

  public ngOnInit() {
    this._todoService.arrayOfTodos.subscribe(() => {
      console.log('message ferom parent');
    });
  }

  ngAfterViewInit() {
    // 1. ViewChild properties are populated
    // 2. child components in view will have data bound properties populated

    // in code i want to create app-child
    const childComponentFactory: ComponentFactory<ChildComponent> = this._factoryResolver.resolveComponentFactory(ChildComponent);
    const componentWrapper: ComponentRef<ChildComponent> = this.containerForDynamicComponent.createComponent(childComponentFactory);
    componentWrapper.instance.message = 'hello from dynamic component';
  }

  randomNumber = () => {
    return Math.random();
  }
}
