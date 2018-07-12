import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newReq = req.clone({
      headers: req.headers.append('Authorization', localStorage.getItem('token'))
    })
    return next.handle(newReq);
    // return next.handle(newReq).pipe(
    //   // filter((event: HttpEvent) => event),
    //   // map()
    // );
  }
}
