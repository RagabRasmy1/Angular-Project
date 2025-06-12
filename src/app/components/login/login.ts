import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserAuth } from '../../services/user-auth';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
 email: string = '';
  password: string = '';
  error = '';

  constructor(private authService: UserAuth, private router: Router) {}

 onSubmit(): void {
  const success = this.authService.login(this.email, this.password);
  if (success) {
    this.router.navigate(['/']);
  } else {
    this.error = 'Invalid email or password';
  }
}
}
