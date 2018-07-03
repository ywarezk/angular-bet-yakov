import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap, filter, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Todo } from './models/todo';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  searchSubject: Subject<string> = new Subject();

  constructor(private _http: HttpClient, private _acitvatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.searchSubject.pipe(
      filter((searchString: string) => searchString != null && searchString.length > 3),
      debounceTime(1000),
      distinctUntilChanged(),
      mergeMap((searchString: string) => this._http.get(`https://nztodo.herokuapp.com/api/task/?format=json&search=${searchString}`)),
      map((jsonFromServer: any[])  => jsonFromServer.map((singleJson) => new Todo(singleJson.title, singleJson.description)))
    )
    .subscribe((todos: Todo[]) => {
      console.log(`observer got: ${jsonOfTodo}`);
      // this._http.get().subscribe(() => {

      // })
    })
  }

  userTypedSearch = (event: Event) => {
    const searchString: string = (event.target as HTMLInputElement).value;
    // console.log(`search string containing the current string in input: ${searchString}`);
    this.searchSubject.next(searchString); // release pulse with search string
  }
}
