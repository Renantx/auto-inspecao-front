import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    
    console.log('🔗 Interceptor HTTP - URL:', request.url);
    console.log('🔗 Interceptor HTTP - Method:', request.method);
    
    // Adiciona o token apenas para requisições ao backend de autenticação (exceto login)
    // Não adiciona token na requisição de login
    if (token && request.url.includes('rtiautoinspecao.saude.ws') && !request.url.includes('login.php')) {
      console.log('🔑 Adicionando token de autorização');
      const clonedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(clonedRequest).pipe(
        tap(
          (event) => console.log('✅ Interceptor - Resposta recebida:', event),
          (error) => console.error('❌ Interceptor - Erro:', error)
        )
      );
    }

    console.log('➡️ Interceptor - Passando requisição sem modificações');
    return next.handle(request).pipe(
      tap(
        (event) => console.log('✅ Interceptor - Resposta recebida:', event),
        (error) => console.error('❌ Interceptor - Erro:', error)
      )
    );
  }
}
