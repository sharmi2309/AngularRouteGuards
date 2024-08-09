import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {

    const isLoggedIn = Math.random() > 0.5;
    console.log('AuthGuard check - isLoggedIn:', isLoggedIn);
    if (isLoggedIn) {
      return true;
    } else {
      console.log('Redirecting to login');
      this.router.navigate(['/login']);
      return false;
    }
  }
  

  }

