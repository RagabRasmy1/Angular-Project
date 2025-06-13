import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserAuth } from '../../services/user-auth';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

  userLoggedInNav:boolean=false
  constructor(private userAuth:UserAuth){

    // this.userLoggedInNav=this.userAuth.isUserLogged
    this.userAuth.userLoggedMethod().subscribe((data)=>{
      this.userLoggedInNav=data
    })
  }

  logout() {
  this.userAuth.logout();
}
}
