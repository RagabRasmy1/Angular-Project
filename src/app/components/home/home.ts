import { Component, inject } from '@angular/core';
import { Products } from '../products/products';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../models/iproduct';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { CartPipePipe } from '../../pipes/cart-pipe-pipe';
import { UserAuth } from '../../services/user-auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Products, FormsModule, CurrencyPipe, DatePipe, CartPipePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  searchTerm: string = '';
  cart: Iproduct[] = [];
  date: Date = new Date();

  userAuth = inject(UserAuth);
  router = inject(Router);

  get isUserLoggedProp(): boolean {
    return this.userAuth.isUserLogged;
  }

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

  login(): void {
    this.userAuth.login("ragab@gmail.com", "123456");
    this.router.navigate(['/home']);
  }

  logout(): void {
    this.userAuth.logout();
    this.router.navigate(['/login']);
  }
}