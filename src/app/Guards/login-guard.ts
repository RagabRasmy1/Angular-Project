import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuth } from '../services/user-auth';

export const loginGuard: CanActivateFn = (route, state) => {
  let userAuth=inject(UserAuth)
  let router=inject(Router)
  if(userAuth.isUserLogged){
    return true;
  }else{
    router.navigate(['/login'])
    return false
  }
  
};
