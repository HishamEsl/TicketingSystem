import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UrlEndpoints } from '../constant/url-endpoints';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'Auth/login';

  userSubject = new BehaviorSubject<string>('');
  userAction$ = this.userSubject.asObservable();

  constructor(private _http: HttpClient, private router: Router) {}

  login = (model: any) =>
    this._http.post(UrlEndpoints.apiRoot + this.loginUrl, model);

  logout = () => {
    sessionStorage.removeItem('TK');
    this.router.navigate(['/auth']);
  };
}
