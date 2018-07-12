import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoTaskComponent implements OnInit {
  public task$: Observable<any>;

  constructor(private _activatedRoute: ActivatedRoute, private _httpClient: HttpClient) { }

  ngOnInit() {
    this.task$ = this._activatedRoute.paramMap.pipe(
      map((paramsMap: ParamMap) => paramsMap.get('id')),
      mergeMap((id: string) => this._httpClient.get(`https://nztodo.herokuapp.com/api/task/${id}/?format=json`))
    )

    this.task$.subscribe(() => {
      // this code won't trigger change detection
    })
  }
}