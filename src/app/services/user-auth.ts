import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuth {

   private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());

  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  login(email: string, password: string): boolean {
    // تأكد إنك ما بترجعش object بدل boolean
    if (email === 'ragab@gmail.com' && password === '123456') {
      localStorage.setItem('user', JSON.stringify({ email }));
      return true;
    }
    return false;
  }


  logout(): void {
    localStorage.removeItem('userToken');
    this.isLoggedInSubject.next(false);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('userToken');
  }
}
