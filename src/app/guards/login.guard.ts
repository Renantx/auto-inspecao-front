import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    // Se não há token, permite acesso à página de login
    if (!this.authService.isAuthenticated()) {
      return of(true);
    }

    // Se há token, valida com o backend
    return this.authService.validateToken().pipe(
      map((isValid: boolean) => {
        if (isValid) {
          // Token válido, redireciona para a página principal
          this.router.navigate(['/']);
          return false;
        }
        // Token inválido, permite acesso à página de login
        return true;
      }),
      catchError(() => {
        // Em caso de erro, permite acesso à página de login
        return of(true);
      })
    );
  }
}
