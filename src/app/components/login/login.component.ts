import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    console.log('📝 Formulário submetido');
    console.log('✅ Form válido:', this.loginForm.valid);
    console.log('📋 Valores:', { usuario: this.loginForm.value.usuario, senha: '***' });

    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';

      const { usuario, senha } = this.loginForm.value;

      console.log('🚀 Chamando AuthService.login()...');

      this.authService.login(usuario, senha).subscribe({
        next: (result) => {
          console.log('📥 Resultado recebido no componente:', result);
          this.isLoading = false;
          if (result.success) {
            console.log('✅ Redirecionando para página principal...');
            this.router.navigate(['/']);
          } else {
            console.warn('⚠️ Login falhou:', result.message);
            this.errorMessage = result.message || 'CPF ou senha inválidos';
          }
        },
        error: (error) => {
          console.error('❌ Erro capturado no componente:', error);
          this.errorMessage = 'Erro ao fazer login. Tente novamente.';
          this.isLoading = false;
        }
      });
    } else {
      console.warn('⚠️ Formulário inválido');
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.loginForm.controls).forEach(key => {
      const control = this.loginForm.get(key);
      control?.markAsTouched();
    });
  }

  get usuario() {
    return this.loginForm.get('usuario');
  }

  get senha() {
    return this.loginForm.get('senha');
  }
}
