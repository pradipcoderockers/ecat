import { Component, OnInit } from '@angular/core';
import { CatagoryService } from '../service/catagory.service';
import { Category } from '../model/catagory.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { HomepageModalComponent } from '../modal/homepage-modal/homepage-modal.component';
import { NgbModal, ModalDismissReasons, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  constructor(private catagoryService: CatagoryService, private router: Router, config: NgbCarouselConfig, private modalService: NgbModal, private service: CatagoryService) {
    config.interval = 1000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  closeResult: string;
  images = ['../../assets/images/slider-1.jpg', '../../assets/images/slider-2.jpg', '../../assets/images/slider-3.jpg']
  categories: Category;
  segment: Category;
  segments: Category[];
  brands: Category[];
  models: Category;
  dtTrigger: Subject<Category> = new Subject();
  ngOnInit() {
    let token = window.localStorage.getItem('token');
    window.localStorage.setItem('breadcrum', '');
    this.service.topcat = (window.localStorage.getItem('breadcrum')) ? JSON.parse(window.localStorage.getItem('breadcrum')) : [];
    this.loadCategory();
    if(token){
      this.service.getUserDetail().subscribe((data:any) => {
        window.localStorage.setItem('stateDetail', JSON.stringify(data.profile));
      });
    }
  }

  configSwipe: SwiperOptions = {
    autoplay: 3000, // Autoplay option having value in milliseconds
    initialSlide: 3, // Slide Index Starting from 0
    slidesPerView: 3, // Slides Visible in Single View Default is 1
    pagination: '.swiper-pagination', // Pagination Class defined
    paginationClickable: true, // Making pagination dots clicable
    nextButton: '.swiper-button-next', // Class for next button
    prevButton: '.swiper-button-prev', // Class for prev button
    spaceBetween: 30 // Space between each Item
  };

  loadCategory() {
    this.catagoryService.getRootTopCategories().subscribe((data:any) => {
      this.categories = data;
      this.segments = data;
    });

    this.catagoryService.brandsVihcleCategories().subscribe((data:any) => {
      this.models = data;
    });
  }

  openSubCat(event, cat: Category, type) {
    let breadcrum = []
    let newBreadCrum = cat
    newBreadCrum['type'] ='category'
    breadcrum.push(newBreadCrum)
    window.localStorage.setItem('breadcrum',JSON.stringify(breadcrum))
    this.router.navigate(['home'], { queryParams: { category: cat.code } });
  }
}
