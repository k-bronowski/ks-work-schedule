import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from './store/state';
import { accessToken$ } from './store/selectors'
import { first, switchMap, tap, catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<State>, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = request;
    return this.store.select(accessToken$).pipe(
      first(),
      switchMap(accessToken => {
        if (accessToken) {
          authReq = request.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } });
        }
        return next.handle(authReq).pipe(
          retry(3),
          catchError((error) => {
            console.log('test', error);
            if (error.error?.statusCode === 401) {
              this.router.navigate(['/', 'login']);
            } else {
              this.router.navigate(['/', 'serverError']);
            }
            return throwError(error);
          })
        );
      })
    )
  }
}
