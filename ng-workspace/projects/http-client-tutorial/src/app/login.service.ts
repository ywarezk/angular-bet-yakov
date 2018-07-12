import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private _httpClient: HttpClient) { }

  login(username: string, password: string) { // Observable<jsonWithToken>
    return of({token: 'hello from login servicew'}).pipe(
      tap((jsonResponse) => localStorage.setItem('token', jsonResponse['token']))
    )


    // return this._httpClient.post('https://nztodo.herokuapp.com/api/login/', {username: username, password})
    //   .pipe(
    //     tap((jsonResponse) => localStorage.setItem('token', jsonResponse['token']))
    //   )
  }
}
