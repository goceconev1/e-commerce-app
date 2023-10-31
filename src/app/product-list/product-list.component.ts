import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService,private router:Router) {} // Replace with your service

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
  viewProductDetails(productId: number) {
    // Navigate to the product detail page with the product's ID
    this.router.navigate(['/product', productId]);
  }
}
