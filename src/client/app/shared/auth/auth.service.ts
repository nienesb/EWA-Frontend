import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../config/env.config';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  awaitingRequest: boolean = false;
  message: string;
  public tempUsers = {
    'users': [{
            'email': 'berfu.taluy@hva.nl',
            'age': '25',
            'name': 'Berfu',
            'role': 'Student'
        },
        {
            'email': 'milan.steenwinkel@hva.nl',
            'age': '22',
            'name': 'Milan',
            'role': 'Student'
        },
        {
            'email': 'jimmy.jimster@hva.nl',
            'age': '20',
            'name': 'Jimmy',
            'role': 'Student'
        }
    ]};

  constructor(private http: Http) {}

  login(email: string, password: string) {
    this.message = null;
    console.log(this.tempUsers);
    for(let user of this.tempUsers.users) {
      if(user.email === email) {
        this.processLogin(user.email);
      }
    }
    if(!this.isLoggedIn) {
      this.message = 'Fout bij het inloggen.';
    }
    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
  }

  validateToken() {
    if(localStorage.getItem('EwaAuthentication')) {
      this.isLoggedIn = true;
    }
  }

  processLogin(token: string) {
    localStorage.setItem('EwaAuthentication', token);
    this.isLoggedIn = true;
  };

  processTokenRefresh(token: string) {
    localStorage.setItem('EwaAuthentication', token);
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
