import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  // Servisleri inject ederek alıyoruz
  const authService = inject(AuthService);
  const toastr = inject(ToastrService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(["login"]);
    toastr.info("Sisteme giriş yapmalısınız");
    return false;
  }
};
