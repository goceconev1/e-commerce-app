import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 15 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 20 },
    { id: 4, name: 'Product 4', description: 'Description 4', price: 30 },
    { id: 5, name: 'Product 5', description: 'Description 5', price: 15 },
    { id: 6, name: 'Product 6', description: 'Description 6', price: 40 },
    { id: 7, name: 'Product 7', description: 'Description 7', price: 20 },
    { id: 8, name: 'Product 8', description: 'Description 8', price: 15 },
    { id: 9, name: 'Product 9', description: 'Description 9', price: 25 },

  ];

  getProducts(): Observable<Product[]> {

    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find((p) => p.id === id);
    return of(product);
  }

  private cartItems: number[] = [];
  private cartItemsSubject = new BehaviorSubject<number[]>(this.cartItems);

  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(productId: number) {
    this.cartItems.push(productId);
    this.cartItemsSubject.next(this.cartItems);
  }
}
