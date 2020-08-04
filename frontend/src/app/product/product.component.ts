import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Person } from '../model/person.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CatagoryService } from '../service/catagory.service';
import { Category } from '../model/catagory.model';
import { Product } from '../model/product.model';
import { ItemModalComponent } from '../modal/item-modal/item-modal.component';
import { Item } from '../model/item.model';
import { NgbModal, ModalDismissReasons, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCartItemRequest } from '../model/add-cart-item-request.model';
import { Favouriteadd } from '../model/favouriteadd.model';
//import { NgFlashMessageService } from 'ng-flash-messages';
// var $ = require('jquery');
//  var dt = require('datatables.net');
// declare var $;



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  id: number;
  category: Category;
  rootCatprohelp: String;
  products: Product[];
  loaded: boolean = false;
  productsloading: boolean = false;
  dtTrigger: Subject<Product> = new Subject();
  loginuser: boolean = false;
  favouriteList: Favouriteadd;
  successmsg: string;
  alertClass: string;
  selectedproductArray: {};
  userMrp : {}
  constructor(private router: Router, private route: ActivatedRoute, private service: CatagoryService, private modalService: NgbModal) { }
  //, private ngFlashMessageService: NgFlashMessageService
  transform(value) {
    var p = value.split('_');
    return p[1] ? p[1] : p[0];
  }

  ngOnInit(): void {
    this.loginuser = (window.localStorage.getItem('userName')) ? true : false;
    let stateDetail = (window.localStorage.getItem('stateDetail')) ? JSON.parse(window.localStorage.getItem('stateDetail')) : [];
    this.userMrp = 'mrp1'
    if((stateDetail.role==1 || stateDetail.role==2) && stateDetail.state.dbp){
        this.userMrp = stateDetail.state.dbp
    }
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20
    };

    this.route.queryParams.subscribe(params => {
      this.productsloading = true;
      var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
      this.service.getProudcts(queryString).subscribe(data => {
        this.products = data.results
        this.loaded = true;
        this.dtTrigger.next();
        this.productsloading = false;
      });
    });

  }
  closeResult: string;

  openN(content, item: Item) {
    console.log(item)
    const modal: NgbModalRef = this.modalService.open(ItemModalComponent);
    modal.componentInstance.item = item;
    modal.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  addToCart(item: Item, type, pro, fvrtid) {
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
      cartReq.product_id = item.id;
      cartReq.quantity = parseInt(quntityp);
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

  addToFav(item: Item, type, pro, fvrtid) {
    let userName = window.localStorage.getItem('token');
    if (!userName) {
      this.alertClass = "info";
      this.successmsg = "User not logged in. Please login to continue.";
      setTimeout(() => {
        this.successmsg = '';
      }, 6000);
      return false;
    }
      let cartReq = new AddCartItemRequest();
      cartReq.product_id = item.id;
      if (userName != null && userName != undefined) {
        this.service.postFavourite(cartReq).subscribe(data => {
          this.alertClass = "success";
          this.successmsg = "Successfully added to your favourite list!"
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
  }


  selectedprolist(item: Item) {
    this.selectedproductArray = item;
  }

  

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  createbreadcrumpro(product) {
    var breadcrum = window.localStorage.getItem('breadcrum');
    var breadcrumN = (breadcrum) ? JSON.parse(breadcrum) : [];
    var Dataext = false;

    breadcrumN.push({ 'id': product.id.toString(), 'name': product.code, 'typeP': 'pro', 'savesecondlevel': product.savesecondlevel });
    breadcrum = JSON.stringify(breadcrumN);
    window.localStorage.setItem('breadcrum', breadcrum);
    this.service.topcat = (window.localStorage.getItem('breadcrum')) ? JSON.parse(window.localStorage.getItem('breadcrum')) : [];
  }



}
