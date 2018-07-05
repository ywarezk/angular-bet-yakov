import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public arrayOfTodos: BehaviorSubject<string[]> = new BehaviorSubject([])
  public arrayOfTodos2: Subject<string[]> = new Subject();

  constructor() { }
}
