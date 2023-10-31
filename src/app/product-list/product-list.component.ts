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
  sortedProducts: Product[] = [];
  sortBy: string = '';
  filterText: string = '';

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.applySortingAndFiltering();
    });
  }


  applySortingAndFiltering() {
    this.sortedProducts = [...this.products];
    if (this.sortBy === 'price-low-to-high') {
      this.sortedProducts.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'price-high-to-low') {
      this.sortedProducts.sort((a, b) => b.price - a.price);
    }

    this.sortedProducts = this.sortedProducts.filter(product =>
      product.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }


  changeSorting() {
    this.applySortingAndFiltering();
  }

  viewProductDetails(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}