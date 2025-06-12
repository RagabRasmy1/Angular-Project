import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { ProductsService } from '../../services/products-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  product: Iproduct | undefined;
  currIndex: number = 0;
  allIds: number[] = [];
  private subscription: Subscription = new Subscription();

  constructor(
    private active: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.allIds = this.productsService.allIds;   
    this.subscription.add(        //subscribe
      this.active.params.subscribe((param) => {    
        const id = +param['id'];
        this.product = this.productsService.getProductById(id);
        this.currIndex = this.allIds.indexOf(id);
      })
    );
  }

  prevProduct() {
    if (this.currIndex > 0) {
      this.currIndex--;
      const id = this.allIds[this.currIndex];
      this.product = this.productsService.getProductById(id);
    }
  }

  nextProduct() {
    if (this.currIndex < this.allIds.length - 1) {
      this.currIndex++;
      const id = this.allIds[this.currIndex];
      this.product = this.productsService.getProductById(id);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
