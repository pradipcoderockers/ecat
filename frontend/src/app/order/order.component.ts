import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CatagoryService } from '../service/catagory.service';
import { NgbModal, ModalDismissReasons, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from '../model/order.model';
import { OrderModalComponent } from '../modal/order-modal/order-modal.component';
import { Item } from '../model/item.model';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  id: number;
  orderList: Order;
  rootCatprohelp: String;
  loaded: boolean = false;
  productsloading: boolean = false;
  dtTrigger: Subject<Order> = new Subject();
  userName: String;
  userMrp : {}
  constructor(private router: Router, private route: ActivatedRoute, private service: CatagoryService, private modalService: NgbModal) { }
  closeResult: string;
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20
    };
    let stateDetail = (window.localStorage.getItem('stateDetail')) ? JSON.parse(window.localStorage.getItem('stateDetail')) : [];
    this.userMrp = 'mrp1'
    if((stateDetail.role==1 || stateDetail.role==2) && stateDetail.state.dbp){
        this.userMrp = stateDetail.state.dbp
    }
    var userName = (window.localStorage.getItem('token')) ? window.localStorage.getItem('token') : '';
    if (userName) {
      this.loaded = true;
      this.productsloading = true;
        this.service.getOrders().subscribe(data => {
          this.orderList = data.results;
          this.productsloading = false;
          this.dtTrigger.next();
        });
    }
  }
  openN(content, Order: Order) {
    this.productsloading = true;
      this.productsloading = false;
      const modal: NgbModalRef = this.modalService.open(OrderModalComponent);
      modal.componentInstance.Order = Order;
      modal.result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
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
}


