import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

interface LoginResponse {
  success: boolean;
  message: string;
  data?: {
    token: string;
    user: {
      id: number;
      cpf: string;
      nome: string;
    };
  };
  errors?: string[];
}

interface MeResponse {
  user: {
    id: number;
    cpf: string;
    nome: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly STORAGE_KEY = 'auth_token';
  private readonly USER_KEY = 'user_data';
  private readonly API_URL = 'http://rtiautoinspecao.saude.ws/api/auth/login.php';
  private readonly ME_URL = 'http://rtiautoinspecao.saude.ws/api/auth/me.php';

  constructor(private http: HttpClient) {}

  /**
   * Normaliza o CPF removendo formatação (pontos e traços)
   * O backend pode esperar CPF com ou sem formatação
   */
  private normalizeCPF(cpf: string): string {
    // Remove tudo que não é número
    return cpf.replace(/\D/g, '');
  }

  login(usuario: string, senha: string): Observable<{ success: boolean; message?: string }> {
    // Remove espaços extras e garante que não há problemas de encoding
    // Normaliza CPF removendo pontos e traços (caso o backend espere apenas números)
    const usuarioLimpo = this.normalizeCPF(usuario.trim());
    const senhaLimpa = senha.trim(); // IMPORTANTE: Backend espera texto puro, mas remove espaços extras

    const payload = {
      usuario: usuarioLimpo,
      senha: senhaLimpa
    };

    console.log('🔐 ========== INICIANDO LOGIN ==========');
    console.log('📍 URL:', this.API_URL);
    console.log('👤 Usuário original:', usuario);
    console.log('👤 Usuário normalizado (CPF):', usuarioLimpo);
    console.log('🔑 Senha (length):', senhaLimpa.length, 'caracteres');
    console.log('📤 Payload enviado:', { usuario: usuarioLimpo, senha: '***' });
    console.log('📦 Payload JSON:', JSON.stringify(payload));
    console.log('⏰ Timestamp:', new Date().toISOString());
    console.log('');
    console.log('⚠️ IMPORTANTE: O backend espera senha em TEXTO PURO (sem hash)');
    console.log('⚠️ Conforme comentário no login.php: "VALIDA SENHA (texto puro)"');
    console.log('⚠️ A senha será comparada diretamente com hash_equals()');
    console.log('');

    return this.http.post<LoginResponse>(this.API_URL, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
      map((response: LoginResponse) => {
        console.log('✅ ========== RESPOSTA RECEBIDA ==========');
        console.log('📦 Response completa:', JSON.stringify(response, null, 2));
        console.log('📊 Success:', response.success);
        console.log('💬 Message:', response.message);

        if (response.success && response.data) {
          console.log('✅ Login bem-sucedido!');
          console.log('👤 Usuário:', response.data.user);
          console.log('🔑 Token (primeiros 30 chars):', response.data.token.substring(0, 30) + '...');

          // Armazena token e dados do usuário
          localStorage.setItem(this.STORAGE_KEY, response.data.token);
          localStorage.setItem(this.USER_KEY, JSON.stringify(response.data.user));
          console.log('💾 Token e dados salvos no localStorage');
          return { success: true, message: response.message };
        }

        console.warn('⚠️ Login falhou - Success:', response.success);
        console.warn('⚠️ Mensagem:', response.message);
        if (response.errors && response.errors.length > 0) {
          console.warn('⚠️ Erros:', response.errors);
        }
        return { success: false, message: response.message || 'Credenciais inválidas' };
      }),
      catchError((error) => {
        console.error('❌ ========== ERRO NA REQUISIÇÃO ==========');
        console.error('🔴 Status:', error.status);
        console.error('🔴 Status Text:', error.statusText);
        console.error('🔴 Error Name:', error.name);
        console.error('🔴 Error Message:', error.message);
        console.error('🔴 Error completo:', error);

        if (error.error) {
          console.error('🔴 Error Body:', error.error);
          console.error('🔴 Error Body (string):', JSON.stringify(error.error, null, 2));
        }

        // Log específico para CORS
        if (error.status === 0 || error.name === 'HttpErrorResponse') {
          console.error('🚫 ========== POSSÍVEL PROBLEMA DE CORS ==========');
          console.error('🚫 Status 0 geralmente indica CORS ou servidor não acessível');
          console.error('🚫 Verifique se o servidor permite requisições do seu domínio');
        }

        // Log de headers da requisição (se disponível)
        if (error.url) {
          console.error('🔴 URL da requisição:', error.url);
        }

        let errorMessage = 'Erro ao fazer login. Tente novamente.';

        // Tenta extrair mensagem de erro da resposta
        if (error.error) {
          if (error.error.message) {
            errorMessage = error.error.message;
          } else if (typeof error.error === 'string') {
            errorMessage = error.error;
          } else if (error.error.error) {
            errorMessage = error.error.error;
          }
        }

        console.error('❌ Mensagem de erro final:', errorMessage);
        return of({ success: false, message: errorMessage });
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.STORAGE_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.STORAGE_KEY);
  }

  /**
   * Valida o token JWT com o backend
   * Retorna true se o token for válido, false caso contrário
   */
  validateToken(): Observable<boolean> {
    const token = this.getToken();

    if (!token) {
      return of(false);
    }

    return this.http.get<MeResponse>(this.ME_URL, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).pipe(
      map((response: MeResponse) => {
        // Atualiza dados do usuário caso tenham mudado
        if (response.user) {
          localStorage.setItem(this.USER_KEY, JSON.stringify(response.user));
        }
        return true;
      }),
      catchError((error) => {
        // Se o token for inválido ou expirado, remove do storage
        if (error.status === 401) {
          this.logout();
        }
        return of(false);
      })
    );
  }

  getUserEmail(): string | null {
    const userData = this.getUserData();
    return userData ? userData.cpf : null;
  }

  getUserData(): { id: number; cpf: string; nome: string } | null {
    const userStr = localStorage.getItem(this.USER_KEY);
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch {
        return null;
      }
    }
    return null;
  }

  requestPasswordReset(cpf: string): Observable<boolean> {
    // TODO: Implementar endpoint de recuperação de senha quando disponível
    // Por enquanto retorna false
    return of(false);
  }
}
