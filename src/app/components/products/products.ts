import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products-service';
import { RouterLink } from '@angular/router';
import { ProductsAPI } from '../../services/products-api';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: Iproduct[] = [];
  totalPrice: number = 0;
  quantity: number = 1;
  @Output() newItemEvent = new EventEmitter<Iproduct>();
  cart: Iproduct[] = [];




  //            AM            pro    :   import
  constructor(private productsService: ProductsService, private productsAPI: ProductsAPI) {
    this.productsAPI.getAllProducts().subscribe(data => this.products = data)
  }

  @Input()
  set searchTerm(value: string) {
    this.products = this.productsService.doSearch(value);
  }

  toggleProductImg(productId: number): void {
    const p = this.products.find((p: Iproduct) => p.productId === productId);
    if (p) {
      p.toggleImg = !p.toggleImg;
    }
  }

  buyProduct(id: number, q: string): void {
    const quantity = parseInt(q);
    const p = this.products.find((p: Iproduct) => p.productId === id);
    if (!p) return;
    if (p.productQuantity < quantity) {
      alert('Not enough stock available');
      return;
    }
    p.productQuantity -= quantity;
    this.totalPrice += p.productPrice * quantity;
    this.newItemEvent.emit({ ...p, productQuantity: quantity });
  }
}
