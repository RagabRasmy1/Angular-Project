import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category-service';
import { ProductsService } from '../../services/products-service';
import { Router } from '@angular/router';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-insert-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './insertproduct.html',
  styleUrls: ['./insertproduct.css'],
})
export class InsertProductComponent {
  fb = inject(FormBuilder);
  productService = inject(ProductsService);
  categoryService = inject(CategoryService);
  router = inject(Router);

  form: FormGroup;
  categories: { id: number; name: string }[] = [];

  constructor() {
    this.form = this.fb.group({
      productName: ['', Validators.required],
      productPrice: [0, [Validators.required, Validators.min(1)]],
      productQuantity: [0, [Validators.required, Validators.min(1)]],
      productImgUrl: ['', Validators.required],
      categoryId: [0, Validators.required],
      productDetails: [''],
    });

    this.categories = this.categoryService.getCategories();
  }

  onSubmit() {
    if (this.form.valid) {
      const product: Iproduct = {
        productId: Date.now(), // مجرد توليد ID مؤقت
        toggleImg: false,
        ...this.form.value,
      };

      this.productService.addProduct(product);
      this.router.navigate(['/home']);
    }
  }
}