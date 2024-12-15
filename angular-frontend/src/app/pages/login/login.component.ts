import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    '../user-page/users/users.component.css',
  ],
})
export class LoginComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  loginInput: string = '';
  passwordInput: string = '';
  errMessage: string = '';

  login() {
    this.errMessage = '';
    this.authService.checkLogin(this.loginInput, this.passwordInput);
    this.router.navigateByUrl('users');
    this.errMessage = 'Ошибка авторизации';
  }
}
