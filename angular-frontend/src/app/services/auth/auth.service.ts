import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isAuth: boolean = false;

  checkLogin(name: string, password: string) {
    this.isAuth = !!(name && password);
  }
}
