import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map, debounceTime, distinctUntilChanged, mergeMap, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {
  public searchString: string = '';
  private queryParamsSubscription: Subscription

  // ActivatedRoute - contains information about the match - (match url to component)
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private _httpClient: HttpClient) { }

  ngOnInit() {
    console.log('on init home page component');
    this.queryParamsSubscription = this._activatedRoute.queryParamMap.pipe(
      map((params: ParamMap) => params.get('search') || ''), // Observable<string> // observable with search string in query params      
      debounceTime(1000), 
      distinctUntilChanged(),
      mergeMap((searchString: string) => this._httpClient.get(`https://nztodo.herokuapp.com/api/task/?format=json&search=${searchString}`))
    )
    .subscribe((arrayOfTodoFromServer: any[]) => {
      console.log(`We got this from server: ${arrayOfTodoFromServer}`);
    })
  }

  ngOnDestroy() {
    this.queryParamsSubscription.unsubscribe();
  }

  /**
   * this will add to the url: ?search=searchString
   */
  search = () => {
    // this._router.navigate(['about/question/stam', 'question', 'stam']) // /about/question/stam/question/stam
    // this._router.navigate(['./', 'question', 'stam']) // /about/question/stam
    // this._router.navigate(['question', '3003', 'slug', 'stam/hello/world'])
    //this._router.navigateByUrl(`/?search=${this.searchString}`);
    this._router.navigate(['./'], 
      {
        queryParams: {search: this.searchString}
      })
  }

}
