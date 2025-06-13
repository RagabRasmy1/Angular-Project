import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuth {
  //1 عرفت بروبيرتي النوع بتاعها بيهافيور سابجيكت 
propSub:BehaviorSubject<boolean>
constructor(){
  //2 give it intial value      generic type
  this.propSub=new BehaviorSubject<boolean>(false)
}

  login(email: string, password: string): boolean {
    let token="0000000000000"
    if (email === 'ragab@gmail.com' && password === '123456') {
      localStorage.setItem('userToken', token);
      //bind on it by difualt
      this.propSub.next(true)
      return true;
    }
    return false;
  }


  logout(): void {
    localStorage.removeItem('userToken');
    this.propSub.next(false)
  }

  get isUserLogged():boolean{
    return (localStorage.getItem('userToken'))?true:false
  }


  userLoggedMethod(){
    return this.propSub
  }
}
