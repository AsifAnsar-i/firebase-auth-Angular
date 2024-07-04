import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
  styleUrls: ['./login.component.css'],
})
export class LogicComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  authService = inject(AuthService);

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  errorMessage: string | null = null;

  
  onSubmit(): void {
     const rowForm = this.form.getRawValue();
     this.authService
     .login(rowForm.email,rowForm.password)
     .subscribe({
        next: () => this.router.navigateByUrl('/'),
        error: (error) => {
          this.errorMessage = error.code;
        },
     }) 

  }
}
