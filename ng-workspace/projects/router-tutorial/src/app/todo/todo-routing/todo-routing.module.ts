import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoTaskComponent } from '../todo-task/todo-task.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: ':id/:slug', component: TodoTaskComponent} // todos/:9044/:title 
    ])
  ],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
