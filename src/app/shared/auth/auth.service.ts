import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { } from 'rxjs/Observable';
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

  handleError(error: any) {
    if (error && error._body) {
      try {
        let errorBody = JSON.parse(error._body);
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
