import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  authService = inject(AuthService);
}
