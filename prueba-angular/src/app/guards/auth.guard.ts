import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {

    // Simulación de autenticación
    const token = localStorage.getItem('token_fake');

    if (token) {
      return true; // Autorizado
    }

    // Si no hay token, redirige al login
    this.router.navigate(['/auth']);
    return false;
  }
}
