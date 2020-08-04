import { Component, OnInit } from '@angular/core';
import { CatagoryService } from '../service/catagory.service';
import { CartItem } from '../model/cart-item.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[];
  cartTotal: number;
  total: number = 0;
  userMrp : {}
  constructor(private service: CatagoryService, private router: Router) { }

  ngOnInit() {
    window.localStorage.setItem('breadcrum', '');
    this.service.topcat = (window.localStorage.getItem('breadcrum')) ? JSON.parse(window.localStorage.getItem('breadcrum')) : [];
    let userName = window.localStorage.getItem('token');
    let stateDetail = (window.localStorage.getItem('stateDetail')) ? JSON.parse(window.localStorage.getItem('stateDetail')) : [];
    this.userMrp = 'mrp1'
    if((stateDetail.role==1 || stateDetail.role==2) && stateDetail.state.dbp){
        this.userMrp = stateDetail.state.dbp
    }
    let userId = "";
    if (userName != null && userName != undefined) {
      this.service.getCart().subscribe(data => {
        this.cartItems = data.results;
        for (let cart of data.results) {
          this.total = this.total + cart.quantity * cart.product[this.userMrp];
        }
      });
    }
  }

  updateQty(item, ele) {
    let index = this.cartItems.indexOf(item);
    this.cartItems[index].qty = ele;
    this.total = this.total + item[this.userMrp];

    // console.log(index);
    // console.log(item);
    // console.log(ele);
  }

  removeFromCart(cartItem: CartItem) {
    let index = this.cartItems.indexOf(cartItem);
    this.cartItems.splice(index, 1);
    this.service.deleteCart(cartItem.id).subscribe(data => {
      this.total = 0;
      let userName = window.localStorage.getItem('token');
      let userId = "";
      if (userName != null && userName != undefined) {
        this.service.getCart().subscribe(data => {
          this.cartItems = data.results;
          for (let cart of data.results) {
            this.total = this.total + cart.quantity * cart.product[this.userMrp];
          }
        });
      }
    });
  }

  generateInvoice() {
    let userName = window.localStorage.getItem('token');
    if (userName != null && userName != undefined && this.cartItems.length>0) {
        this.service.createOrder().subscribe(data => {
            alert("Checkout complete");
            this.router.navigate(['']);
        });
    }
    else{
      alert("Please add your product to cart first!");
    }
  }
}
