import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public arrayOfTodos: BehaviorSubject<string[]> = new BehaviorSubject([])

  constructor() { }
}
