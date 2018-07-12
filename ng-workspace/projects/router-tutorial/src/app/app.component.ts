import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { SetName } from './app-store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name$: Observable<string>;
  title = 'app';

  constructor(private _store: Store<any>) {
    this.name$ = _store.pipe(
      select(state => state.user.name)
    )

    setTimeout(() => {
      this._store.dispatch(new SetName('yariv katz'))
    }, 2000)
  }
}
