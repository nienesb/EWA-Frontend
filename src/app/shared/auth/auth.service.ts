import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../config/app.config';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  awaitingRequest: boolean = false;
  message: string;

  constructor(private appConfig: AppConfig, private http: Http) {}

  login(email: string, password: string) : Observable<boolean> {
		var context = this;
    this.message = null;
    localStorage.setItem('AmbuFlowUserName', email);
    let body = 'grant_type=password&scope=offline_access&username=' + email + '&password=' + password;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.appConfig.get('API') + '/token', body, options).subscribe(
			success => context.processLogin(success),
			failure => context.handleError(failure)
		);
		return Observable.of(this.isLoggedIn);
	}

  logout() {
    localStorage.removeItem('AmbuFlowAccessTokenExpires');
    localStorage.removeItem('AmbuFlowAccessToken');
    localStorage.removeItem('AmbuFlowRefreshToken');
    localStorage.removeItem('AmbuFlowUserName');
    this.isLoggedIn = false;
  }

  validateToken(): boolean {
    let authData = localStorage.getItem('AmbuFlowAccessTokenExpires');
    console.log('Starting validateToken function.');
    if (authData) {
      console.log('Auth data in local storage exists.');
      let now = new Date();
      let tokenExpiration = new Date(localStorage.getItem('AmbuFlowAccessTokenExpires'));
      console.log('Now: ' + now.toString() + ', token expires at: ' + tokenExpiration.toString());
      if (now > tokenExpiration) {
        console.log('Token has expired. Attempting to get a new one from server.');
        this.awaitingRequest = true;
        this.refreshToken(localStorage.getItem('AmbuFlowRefreshToken'));
        console.log('Token retrieved from server. Returning this.isLoggedIn value: ' + this.isLoggedIn);
        return this.isLoggedIn;
      } else {
        console.log('Token is still valid. Returning true.');
        this.isLoggedIn = true;
        return true;
      }
    }
    console.log('No Auth data could be found. Returning false.');
    this.isLoggedIn = false;
    return false;
  }

  refreshToken(refreshToken: string) {
    var context = this;
    let body = 'grant_type=refresh_token&scope=offline_access&refresh_token=' + refreshToken;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.appConfig.get('API') + '/token', body, options).subscribe(
      success => context.processTokenRefresh(success),
      failure => context.handleError(failure)
    );
  }

  getAccessToken(): string {
    return localStorage.getItem('AmbuFlowAccessToken');
  }

  processLogin(response: Response) {
    let jsonData = response.json();
    let currentTime = new Date();
    currentTime.setSeconds(currentTime.getSeconds() + jsonData['expires_in']);
    localStorage.setItem('AmbuFlowAccessTokenExpires', currentTime.toString());
    localStorage.setItem('AmbuFlowAccessToken', jsonData['access_token']);
    localStorage.setItem('AmbuFlowRefreshToken', jsonData['refresh_token']);
    this.isLoggedIn = true;
  };

  processTokenRefresh(response: Response) {
    var jsonData = response.json();
    localStorage.setItem('AmbuFlowAccessTokenExpires', jsonData['.expires']);
    localStorage.setItem('AmbuFlowAccessToken', jsonData['access_token']);
    localStorage.setItem('AmbuFlowRefreshToken', jsonData['refresh_token']);
    this.isLoggedIn = true;
  };

  handleError(error: any) {
    if (error && error._body) {
      try {
        var errorBody = JSON.parse(error._body);
        if (errorBody && errorBody.error_description) {
          this.message = errorBody.error_description;
        } else {
          this.message = 'An unexpected error occurred.';
        }
      } catch (ex) {
        this.message = 'An unexpected error occurred.';
      }
    } else {
      this.message = 'An unexpected error occurred.';
    }
    this.isLoggedIn = false;
  };
}
