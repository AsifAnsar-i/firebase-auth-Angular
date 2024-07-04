import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.user$.subscribe((user: any) => {
      if (user) {
        this.authService.currentUser$ig.set({
          email: user.email!,
          username: user.displayName!,
        });
      } else {
        this.authService.currentUser$ig.set(null);
      }
      console.log(this.authService.currentUser$ig());
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
