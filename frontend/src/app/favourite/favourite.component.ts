import { Component, OnInit } from '@angular/core';
import { CatagoryService } from '../service/catagory.service';
import { CartItem } from '../model/cart-item.model';
import { Router } from '@angular/router';
import { Favouriteadd } from '../model/favouriteadd.model';
import { AddCartItemRequest } from '../model/add-cart-item-request.model';
import { Item } from 'src/app/model/item.model';


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  cartItems: CartItem[];
  cartTotal: number;
  total: number = 0;
  favouriteList: Favouriteadd;
  listdata: string;
  alertClass : string
  successmsg : String
  constructor(private service: CatagoryService, private router: Router) { }
  ngOnInit() {
    window.localStorage.setItem('breadcrum', '');
    this.service.getFavourite().subscribe(data => {
      this.favouriteList = data.results;
    });

  }
  removeFromCart(cartItem: CartItem) {
    this.service.deleteFavourite(cartItem.id).subscribe(data => {
      this.service.getFavourite().subscribe(data => {
        this.favouriteList = data.results;
      });
    });
  }
  addToCart(item:any, type, pro, fvrtid) {
    let userName = window.localStorage.getItem('token');
    if (!userName) {
      this.alertClass = "info";
      this.successmsg = "User not logged in. Please login to continue.";
      setTimeout(() => {
        this.successmsg = '';
      }, 6000);
      return false;
    }
    var quntity = prompt("Please enter quantity :", "1");
    var quntityp = parseInt(quntity);
    if (quntityp > 0) {
      let cartReq = new AddCartItemRequest();
      cartReq.product_id = item.product.id;
      cartReq.quantity = quntityp;
      if (userName != null && userName != undefined) {
        this.service.postCart(cartReq).subscribe(data => {
          this.alertClass = "success";
          this.successmsg = "Successfully added to your cart list!"
          setTimeout(() => {
            this.successmsg = '';
          }, 6000);
        });
      } else {
        this.alertClass = "info";
        this.successmsg = "User not logged in. Please login to continue.";
        setTimeout(() => {
          this.successmsg = '';
        }, 6000);
      }
    } else {
      this.alertClass = "danger";
      this.successmsg = "Please enter quantity .";
      setTimeout(() => {
        this.successmsg = '';
      }, 6000);
    }
  }
}
