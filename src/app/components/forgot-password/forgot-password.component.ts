import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  isLoading = false;
  successMessage = '';
  errorMessage = '';
  emailSent = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      this.successMessage = '';

      const email = this.forgotPasswordForm.get('email')?.value;

      this.authService.requestPasswordReset(email).subscribe({
        next: (success) => {
          if (success) {
            this.emailSent = true;
            this.successMessage = 'Instruções para recuperação de senha foram enviadas para seu email.';
          } else {
            this.errorMessage = 'Não foi possível processar sua solicitação. Verifique o email informado.';
            this.isLoading = false;
          }
        },
        error: (error) => {
          this.errorMessage = 'Erro ao processar solicitação. Tente novamente mais tarde.';
          this.isLoading = false;
          console.error('Erro na recuperação de senha:', error);
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }

  backToLogin(): void {
    this.router.navigate(['/login']);
  }

  private markFormGroupTouched(): void {
    Object.keys(this.forgotPasswordForm.controls).forEach(key => {
      const control = this.forgotPasswordForm.get(key);
      control?.markAsTouched();
    });
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }
}
