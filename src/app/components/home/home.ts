import { Component, inject } from '@angular/core';
import { Products } from '../products/products';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../models/iproduct';
import { pipe } from 'rxjs';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { CartPipePipe } from '../../pipes/cart-pipe-pipe';
import { UserAuth } from '../../services/user-auth';

@Component({
  selector: 'app-home',
  imports: [Products, FormsModule, CurrencyPipe, DatePipe, CartPipePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  searchTerm: string = '';
  cart: Iproduct[] = [];
  date: Date = new Date();
  addToCart(product: Iproduct): void {
    const existingProduct = this.cart.find(
      (p) => p.productId === product.productId
    );

    if (existingProduct) {
      existingProduct.productQuantity += product.productQuantity;
    } else {
      this.cart.push(product);
    }
  }

  removeFromCart(id: number): void {
    this.cart = this.cart.filter((product) => product.productId !== id);
  }

  userAuth=inject(UserAuth)
  login(){
    this.userAuth.login("ragab@gmail.com","123456")
  }

  logout(){
    this.userAuth.logout()
  }
}
