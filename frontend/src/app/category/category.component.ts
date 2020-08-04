import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatagoryService } from '../service/catagory.service';
import { Category } from '../model/catagory.model';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
	constructor(private router: Router, private route: ActivatedRoute, public service: CatagoryService) { }
	subcategories:any [];
	subcategoriesloading: boolean = false;
	catType : string;
	leafspringcheck: string;
	ngOnInit() {
		this.route.queryParams.subscribe(params => {
			this.subcategoriesloading = true;
			let category = params['category'] ? params['category'] : ""
			let subcategory = params['subcategory'] ? params['subcategory'] : ""
			let segment = params['segment'] ? params['segment'] : ""
			let subsegment = params['subsegment'] ? params['subsegment'] : ""
			let leaftype = params['leaftype'] ? params['leaftype'] : ""
			let vechicle = params['vechicle'] ? params['vechicle'] : ""
			let leafposition = params['leafposition'] ? params['leafposition'] : ""
			let vechiclemodel = params['vechiclemodel'] ? params['vechiclemodel'] : ""
			if (vechiclemodel && leafposition && vechicle && leaftype && subsegment && segment && subcategory && category) {
				this.route.queryParams.subscribe(params => {
					this.router.navigate(['products'], { queryParams: params});
				});
			}
			else if (leafposition && vechicle && leaftype && subsegment && segment && subcategory && category) {
				this.catType = 'vechiclemodel'
				this.service.getVechiclemodel(leafposition).subscribe((data:any) => {
						this.subcategories = data;
						this.subcategoriesloading = false;
				});
			}
			else if (vechicle && leaftype && subsegment && segment && subcategory && category) {
				this.catType = 'leafposition'
				this.service.getLeafposition(vechicle).subscribe((data:any) => {
					this.subcategories = data;
					this.subcategoriesloading = false;
				});
			}
			else if (leaftype && subsegment && segment && subcategory && category) {
				this.catType = 'vechicle'
				this.service.getVechicle(leaftype).subscribe((data:any) => {
					this.subcategories = data;
					this.subcategoriesloading = false;
				});
			}
			else if (subsegment && segment && subcategory && category) {
				this.catType = 'leaftype'
				this.service.getLeaftype(subsegment).subscribe((data:any) => {
					this.subcategories = data;
					this.subcategoriesloading = false;
				});
			}
			else if (segment && subcategory && category) {
				this.catType = 'subsegment'
				this.service.getSubSegment(segment).subscribe((data:any) => {
					this.subcategories = data;
					this.subcategoriesloading = false;
				});
			}
			else if (subcategory && category) {
				this.catType = 'segment'
				this.service.getSegment(subcategory).subscribe((data:any) => {
					this.subcategories = data;
					this.subcategoriesloading = false;
				});
			}
			else if(category) {
				this.catType = 'subcategory'
				this.service.getSubcategory(category).subscribe((data:any) => {
					this.subcategories = data;
					this.subcategoriesloading = false;
				});
			}
			else
			{
				this.router.navigate(['/']);
			}
		});
	}
	openSubCat(event, cat: Category, catType) {
		let breadcrum = (window.localStorage.getItem('breadcrum')) ? JSON.parse(window.localStorage.getItem('breadcrum')) : [];
		let breadCrumNew = cat[catType]
		breadCrumNew.type = catType
		breadcrum.push(breadCrumNew)
		this.service.topcat = breadcrum
		window.localStorage.setItem('breadcrum',JSON.stringify(breadcrum))
		this.route.queryParams.subscribe(params => {
			let paramsList = {}
			if(params['category'])
			{
				paramsList['category'] = params['category']
			}
			if(catType=="subcategory" || params['subcategory'])
			{
				paramsList['subcategory'] = params['subcategory']?params['subcategory']:cat['subcategory']['code']	
			}
			if(catType=="segment" || params['segment'])
			{
				paramsList['segment'] = params['segment']?params['segment']:cat['segment']['code']	
			}
			if(catType=="subsegment" || params['subsegment'])
			{
				paramsList['subsegment'] = params['subsegment']?params['subsegment']:cat['subsegment']['code']	
			}
			if(catType=="leaftype" || params['leaftype'])
			{
				paramsList['leaftype'] = params['leaftype']?params['leaftype']:cat['leaftype']['code']	
			}
			if(catType=="vechicle" || params['vechicle'])
			{
				paramsList['vechicle'] = params['vechicle']?params['vechicle']:cat['vechicle']['code']	
			}
			if(catType=="leafposition" || params['leafposition'])
			{
				paramsList['leafposition'] = params['leafposition']?params['leafposition']:cat['leafposition']['code']	
			}
			if(catType=="vechiclemodel" || params['vechiclemodel'])
			{
				paramsList['vechiclemodel'] =  params['vechiclemodel']?params['vechiclemodel']:cat['vechiclemodel']['code']	
			}
			if(catType=="vechiclemodel" || params['vechiclemodel']){
				
				this.router.navigate(['products'], { queryParams: paramsList});
			}
			else
			{
				this.router.navigate(['home'], { queryParams: paramsList});
			}
			
		});
		
	 }
}
