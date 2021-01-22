import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap, catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '@ks-work-schedule/models';
import { Md5 } from 'ts-md5/dist/md5';

export interface LoginUserResult {
  loginSuccess: boolean;
  accessToken?: string;
}


@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private httpClient: HttpClient) { }

  loginUser(username: string, password: string): Observable<LoginUserResult> {
    const md5 = new Md5();
    password = md5.appendStr(password).appendStr('some_secret_string').end().toString();
    return this.httpClient.post('/api/login', { username, password }).pipe(
      catchError(err => {
        console.log('error', err);
        if (err.error.statusCode === 401) {
          return of({ unauthorized: true })
        }

        return of(null)
      }),
      map((result) => {
        if (result.unauthorized) {
          return { loginSuccess: false }
        }
        if (result.access_token) {
          return { loginSuccess: true, accessToken: result.access_token }
        }
      })
    )
  }

  getUserProfile(): Observable<User> {
    return this.httpClient.get('/api/profile').pipe(
      map((result) => result as User)
    )
  }
}
