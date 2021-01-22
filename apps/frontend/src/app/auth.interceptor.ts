import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from './store/state';
import { accessToken$ } from './store/selectors'
import { first, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<State>) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.store.select(accessToken$).pipe(
      first(),
      switchMap(accessToken => {
        if (accessToken) {
          const authReq = request.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } });
          return next.handle(authReq);
        } else {
          return next.handle(request);
        }
      })
    )
  }
}
