 import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from 'src/app/model/order.model';
 import { CatagoryService } from 'src/app/service/catagory.service';
 

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent implements OnInit {
  @Input() Order;
   
    userName = window.localStorage.getItem('userName');
    userMrp = {}
  constructor(public activeModal: NgbActiveModal, private service:CatagoryService) {}

  ngOnInit() {
  	   
    let stateDetail = (window.localStorage.getItem('stateDetail')) ? JSON.parse(window.localStorage.getItem('stateDetail')) : [];
    this.userMrp = 'mrp1'
    if((stateDetail.role==1 || stateDetail.role==2) && stateDetail.state.dbp){
        this.userMrp = stateDetail.state.dbp
    }
  }
  transform(value) {
        var p =  value.split('_');
		 return  p[1]?p[1]:p[0];
    }

}
