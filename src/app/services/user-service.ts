import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../models/iuser';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
httpHeaders={

}
  constructor(private http:HttpClient) {

    this.httpHeaders={Headers:new HttpHeaders({
      'Content-Type':'application/json',               //بيعرفني التايب بتاع الحاجه اللي هيحصلها بوست  ودا الديفولت جيسون
      // "Authorization"
    })}
   }
       //مدام بكلم http هترجع observabal 
  signUp(newUser:Iuser):Observable<Iuser>{
                                           //url                obj          header
    return this.http.post<Iuser>(`${environment.baseUrl}/users`,newUser,this.httpHeaders)
  }
}
