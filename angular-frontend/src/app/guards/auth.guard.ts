import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = () => {
  const route = inject(Router);
  const authService = inject(AuthService);
  if (authService.isAuth) {
    return true;
  } else {
    route.navigateByUrl('login');
    return false;
  }
};
