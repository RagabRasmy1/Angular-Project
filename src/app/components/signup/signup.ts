import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Iuser } from '../../models/iuser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  userService = inject(UserService)
  userProp: Iuser = {} as Iuser
  constructor(private router: Router) { }
  addUser() {


    this.userService.signUp(this.userProp).subscribe({
      // console.log(data);
      next: (data) => {
        console.log('User registered:', data);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Signup failed:', err);
      }

    })
  }
}
