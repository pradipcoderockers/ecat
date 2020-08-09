import { Component, OnInit } from '@angular/core';
import { CatagoryService } from '../service/catagory.service';
import { Category } from '../model/catagory.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DeclareVarStmt } from '@angular/compiler';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(public catagoryService: CatagoryService, private route: ActivatedRoute, public router: Router, private _location: Location) { }
	categories: Category[];
	subCategories: Category[];
	segments: Category[];
	subSegments: Category[];
	leafType: Category[];
	vechicles: Category[];
	leafPosition: Category[];
	vechicleModel: Category[];
	brands: Category[];
	models: Category[];
	selectedCategory: Category;
	selectedSubCategory: Category;
	selectedSegment: Category;
	selectedSubSegment: Category;
	selectedLeafType: Category;
	selectedVechicle: Category;
	selectedLeafPosition: Category;
	selectedVechiclemodel: Category;
	selectedBrand: Category;
	selectedModel: Category;
	searchPartCode: string;
	product: Category[];
	loginuser: boolean = false;
	breadcrum: Category[];
	slist = '';

	ngOnInit() {
		this.loginuser = (window.localStorage.getItem('token')) ? true : false;
		this.loadCategory();
		this.catagoryService.topcat = this.breadcrum = (window.localStorage.getItem('breadcrum')) ? JSON.parse(window.localStorage.getItem('breadcrum')) : [];
	}

	loadCategory() {
		this.catagoryService.getRootTopCategories().subscribe((data: any) => {
			this.categories = data;
		});
	}

	loadSubCategory() {
		this.catagoryService.getSubcategory(this.selectedCategory.code).subscribe((data: any) => {
			this.subCategories = data;
			this.router.navigate(['home'], { queryParams: { category: this.selectedCategory.code } });
		});
	}
	loadSegment() {

		this.catagoryService.getSegment(this.selectedSubCategory.code).subscribe((data: any) => {
			this.segments = data;
			this.filterCategory(this.selectedSubCategory, 'subcategory')
		});
	}

	loadSubSegment() {
		this.catagoryService.getSubSegment(this.selectedSegment.code).subscribe((data: any) => {
			this.subSegments = data;
			this.filterCategory(this.selectedSegment, 'segment')
		});
	}
	loadLeafType() {
		this.catagoryService.getLeaftype(this.selectedSubSegment.code).subscribe((data: any) => {
			this.leafType = data;
			this.filterCategory(this.selectedSubSegment, 'subsegment')
		});
	}
	loadVechicle() {
		this.catagoryService.getVechicle(this.selectedLeafType.code).subscribe((data: any) => {
			this.vechicles = data;
			this.filterCategory(this.selectedLeafType, 'leaftype')
		});
	}

	loadLeafPosition() {
		this.catagoryService.getLeafposition(this.selectedVechicle.code).subscribe((data: any) => {
			this.leafPosition = data;
			this.filterCategory(this.selectedVechicle, 'vechicle')
		});
	}

	loadVechicleModel() {
		this.catagoryService.getVechiclemodel(this.selectedLeafPosition.code).subscribe((data: any) => {
			this.vechicleModel = data;
			this.filterCategory(this.selectedLeafPosition, 'leafposition')
		});
	}
	loadProduct() {
		console.log(this.selectedVechiclemodel)
		this.filterCategory(this.selectedVechiclemodel, 'vechiclemodel')
	}

	openSubCat(event, cat: Category, type) {
		let breadcrum = []
		breadcrum.push(cat)
		window.localStorage.setItem('breadcrum', JSON.stringify(breadcrum))
		window.location.href = '/home?category=' + cat.code
	}

	filterCategory(cat: Category, catType) {
		this.route.queryParams.subscribe(params => {
			let paramsList = {}
			if (params['category']) {
				paramsList['category'] = params['category']
			}
			if (catType == "subcategory" || params['subcategory']) {
				paramsList['subcategory'] = params['subcategory'] ? params['subcategory'] : cat['code']
			}
			if (catType == "segment" || params['segment']) {
				paramsList['segment'] = params['segment'] ? params['segment'] : cat['code']
			}
			if (catType == "subsegment" || params['subsegment']) {
				paramsList['subsegment'] = params['subsegment'] ? params['subsegment'] : cat['code']
			}
			if (catType == "leaftype" || params['leaftype']) {
				paramsList['leaftype'] = params['leaftype'] ? params['leaftype'] : cat['code']
			}
			if (catType == "vechicle" || params['vechicle']) {
				paramsList['vechicle'] = params['vechicle'] ? params['vechicle'] : cat['code']
			}
			if (catType == "leafposition" || params['leafposition']) {
				paramsList['leafposition'] = params['leafposition'] ? params['leafposition'] : cat['code']
			}
			if (catType == "vechiclemodel" || params['vechiclemodel']) {
				paramsList['vechiclemodel'] = params['vechiclemodel'] ? params['vechiclemodel'] : cat['code']
			}
			if (catType == "vechiclemodel") {
				this.router.navigate(['products'], { queryParams: paramsList });
			}
			if (catType == "item_code") {
				paramsList['item_code'] = cat['code']
				this.router.navigate(['products'], { queryParams: paramsList });
			}
			else {
				this.router.navigate(['home'], { queryParams: paramsList });
			}

		});
	}

	selectBreadCrum(cat: Category) {
		let newBreadCrum = []
		if (cat) {
			const result = this.catagoryService.topcat?this.catagoryService.topcat:[];
			var index = result.indexOf(cat)
			if (index > -1) {
				let url = window.location.href
				for (let i = 0; i <= index; i++) {
					let breadC = this.catagoryService.topcat[i]
					 newBreadCrum.push(breadC)
				}
				window.localStorage.setItem('breadcrum', JSON.stringify(newBreadCrum))
				let replaceName = cat.type + "=" + cat.code
				url = url.replace(replaceName, '__REPLACEME__').split("__REPLACEME__")[0] + replaceName;
				window.location.href = url.replace('products', 'home')
			}
		}
	}

	resetSearch() {
		this.selectedCategory = null;
		this.selectedSegment = null;
		this.selectedBrand = null;
		this.selectedModel = null;
		this.router.navigate(['']);
		this.catagoryService.topcat = (window.localStorage.getItem('breadcrum')) ? JSON.parse(window.localStorage.getItem('breadcrum')) : [];
	}

	backClicked(){
		window.history.go(-1)
	}



}
