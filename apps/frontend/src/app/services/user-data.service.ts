import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  storeAuthToken(authTokent: string) {
    localStorage.setItem('ksScheduler_AuthToken', authTokent);
  }

  restoreAuthToken() {
    return localStorage.getItem('ksScheduler_AuthToken') as string;
  }
}
