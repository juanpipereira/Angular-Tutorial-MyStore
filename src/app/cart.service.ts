import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToMyCart(product) {
    this.items.push(product);
  }
  getMyItems() {
    return this.items;
  }
  clearMyCart() {
    this.items = [];
    return this.items;
  }
  getTheShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  constructor(
    private http: HttpClient
  ) { }

}
