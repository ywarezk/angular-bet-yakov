import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { TodoRoutingModule } from './todo-routing/todo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule
  ],
  declarations: [TodoTaskComponent]
})
export class TodoModule { }
