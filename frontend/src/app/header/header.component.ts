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
		this.catagoryService.topcat = this.breadcrum = (window.localStorage.getItem('breadcrum')) ? JSON.parse(window.localStorage.getItem('breadcrum')) : [];
		this.route.queryParams.subscribe(params => {
			let category = params['category'] ? params['category'] : "default"
			let subcategory = params['subcategory'] ? params['subcategory'] : ""
			let segment = params['segment'] ? params['segment'] : ""
			let subsegment = params['subsegment'] ? params['subsegment'] : ""
			let leaftype = params['leaftype'] ? params['leaftype'] : ""
			let vechicle = params['vechicle'] ? params['vechicle'] : ""
			let leafposition = params['leafposition'] ? params['leafposition'] : ""
			let vechiclemodel = params['vechiclemodel'] ? params['vechiclemodel'] : ""
			if (vechiclemodel && leafposition && vechicle && leaftype && subsegment && segment && subcategory && category) {
				this.loadVechicleModelInit(category, subcategory, segment, subsegment, leaftype, vechicle, leafposition, vechiclemodel)
			}
			else if (leafposition && vechicle && leaftype && subsegment && segment && subcategory && category) {
				this.loadLeafPositionInit(category, subcategory, segment, subsegment, leaftype, vechicle, leafposition)
			}
			else if (vechicle && leaftype && subsegment && segment && subcategory && category) {
				this.loadVechicleInit(category, subcategory, segment, subsegment, leaftype, vechicle)
			}
			else if (leaftype && subsegment && segment && subcategory && category) {
				this.loadLeafTypeInit(category, subcategory, segment, subsegment, leaftype)
			}
			else if (subsegment && segment && subcategory && category) {
				this.loadSubSegmentInit(category, subcategory, segment, subsegment)

			}
			else if (segment && subcategory && category) {
				this.loadSegmentInit(category, subcategory, segment)
			}
			else if (subcategory && category) {
				this.loadSubCategoryInit(category, subcategory)
			}
			else if (category) {
				this.loadCategory(category)
			}
		});

	}
	loadCategory(category) {
		this.catagoryService.getRootTopCategories().subscribe((data: any) => {
			this.categories = data;
			var index = this.categories.map(function (e) { return e.code; }).indexOf(category);
			this.selectedCategory = this.categories[index]
			this.catagoryService.getSubcategory(this.selectedCategory.code).subscribe((data: any) => {
				this.subCategories = data;
			});
		});
	}

	loadSubCategoryInit(category, subcategory) {
		this.catagoryService.getRootTopCategories().subscribe((data: any) => {
			this.categories = data;
			var index = this.categories.map(function (e) { return e.code; }).indexOf(category);
			this.selectedCategory = this.categories[index]
			this.catagoryService.getSubcategory(category).subscribe((data: any) => {
				this.subCategories = data;
				var subCatindex = data.map(function (e) { return e.subcategory.code; }).indexOf(subcategory);
				this.selectedSubCategory = this.subCategories[subCatindex]['subcategory']
				this.catagoryService.getSegment(this.selectedSubCategory.code).subscribe((data: any) => {
					this.segments = data;
				});
			});
		});
	}

	loadSegmentInit(category, subcategory, segment) {
		this.catagoryService.getRootTopCategories().subscribe((data: any) => {
			this.categories = data;
			var index = this.categories.map(function (e) { return e.code; }).indexOf(category);
			this.selectedCategory = this.categories[index]
			this.catagoryService.getSubcategory(category).subscribe((data: any) => {
				this.subCategories = data;
				var subCatindex = data.map(function (e) { return e.subcategory.code; }).indexOf(subcategory);
				this.selectedSubCategory = this.subCategories[subCatindex]['subcategory']
				this.catagoryService.getSegment(this.selectedSubCategory.code).subscribe((data: any) => {
					this.segments = data;
					var segmentIndex = data.map(function (e) { return e.segment.code; }).indexOf(segment);
					this.selectedSegment = this.segments[segmentIndex]['segment']
					this.catagoryService.getSubSegment(segment).subscribe((data: any) => {
						this.subSegments = data;
					});
				});
			});
		});
	}


	loadSubSegmentInit(category, subcategory, segment, subsegment) {
		this.catagoryService.getRootTopCategories().subscribe((data: any) => {
			this.categories = data;
			var index = this.categories.map(function (e) { return e.code; }).indexOf(category);
			this.selectedCategory = this.categories[index]
			this.catagoryService.getSubcategory(category).subscribe((data: any) => {
				this.subCategories = data;
				var subCatindex = data.map(function (e) { return e.subcategory.code; }).indexOf(subcategory);
				this.selectedSubCategory = this.subCategories[subCatindex]['subcategory']
				this.catagoryService.getSegment(this.selectedSubCategory.code).subscribe((data: any) => {
					this.segments = data;
					var segmentIndex = data.map(function (e) { return e.segment.code; }).indexOf(segment);
					this.selectedSegment = this.segments[segmentIndex]['segment']
					this.catagoryService.getSubSegment(segment).subscribe((data: any) => {
						this.subSegments = data;
						var subSegmentIndex = data.map(function (e) { return e.subsegment.code; }).indexOf(subsegment);
						this.selectedSubSegment = this.subSegments[subSegmentIndex]['subsegment']
						this.catagoryService.getLeaftype(subsegment).subscribe((data: any) => {
							this.leafType = data;
						});

					});
				});
			});
		});
	}

	loadLeafTypeInit(category, subcategory, segment, subsegment, leaftype) {
		this.catagoryService.getRootTopCategories().subscribe((data: any) => {
			this.categories = data;
			var index = this.categories.map(function (e) { return e.code; }).indexOf(category);
			this.selectedCategory = this.categories[index]
			this.catagoryService.getSubcategory(category).subscribe((data: any) => {
				this.subCategories = data;
				var subCatindex = data.map(function (e) { return e.subcategory.code; }).indexOf(subcategory);
				this.selectedSubCategory = this.subCategories[subCatindex]['subcategory']
				this.catagoryService.getSegment(this.selectedSubCategory.code).subscribe((data: any) => {
					this.segments = data;
					var segmentIndex = data.map(function (e) { return e.segment.code; }).indexOf(segment);
					this.selectedSegment = this.segments[segmentIndex]['segment']
					this.catagoryService.getSubSegment(segment).subscribe((data: any) => {
						this.subSegments = data;
						var subSegmentIndex = data.map(function (e) { return e.subsegment.code; }).indexOf(subsegment);
						this.selectedSubSegment = this.subSegments[subSegmentIndex]['subsegment']
						this.catagoryService.getLeaftype(subsegment).subscribe((data: any) => {
							this.leafType = data;
							var leafTypeIndex = data.map(function (e) { return e.leaftype.code; }).indexOf(leaftype);
							this.selectedLeafType = this.leafType[leafTypeIndex]['leaftype']
							this.catagoryService.getVechicle(leaftype).subscribe((data: any) => {
								this.vechicles = data;
							});
						});

					});
				});
			});
		});
	}


	loadVechicleInit(category, subcategory, segment, subsegment, leaftype, vechicle) {
		this.catagoryService.getRootTopCategories().subscribe((data: any) => {
			this.categories = data;
			var index = this.categories.map(function (e) { return e.code; }).indexOf(category);
			this.selectedCategory = this.categories[index]
			this.catagoryService.getSubcategory(category).subscribe((data: any) => {
				this.subCategories = data;
				var subCatindex = data.map(function (e) { return e.subcategory.code; }).indexOf(subcategory);
				this.selectedSubCategory = this.subCategories[subCatindex]['subcategory']
				this.catagoryService.getSegment(this.selectedSubCategory.code).subscribe((data: any) => {
					this.segments = data;
					var segmentIndex = data.map(function (e) { return e.segment.code; }).indexOf(segment);
					this.selectedSegment = this.segments[segmentIndex]['segment']
					this.catagoryService.getSubSegment(segment).subscribe((data: any) => {
						this.subSegments = data;
						var subSegmentIndex = data.map(function (e) { return e.subsegment.code; }).indexOf(subsegment);
						this.selectedSubSegment = this.subSegments[subSegmentIndex]['subsegment']
						this.catagoryService.getLeaftype(subsegment).subscribe((data: any) => {
							this.leafType = data;
							var leafTypeIndex = data.map(function (e) { return e.leaftype.code; }).indexOf(leaftype);
							this.selectedLeafType = this.leafType[leafTypeIndex]['leaftype']
							this.catagoryService.getVechicle(leaftype).subscribe((data: any) => {
								this.vechicles = data;
								var vechicleIndex = data.map(function (e) { return e.vechicle.code; }).indexOf(vechicle);
								this.selectedVechicle = this.vechicles[vechicleIndex]['vechicle']
								this.catagoryService.getLeafposition(vechicle).subscribe((data: any) => {
									this.leafPosition = data;
								});
							});
						});
					});
				});
			});
		});
	}

	loadLeafPositionInit(category, subcategory, segment, subsegment, leaftype, vechicle, leafposition) {
		this.catagoryService.getRootTopCategories().subscribe((data: any) => {
			this.categories = data;
			var index = this.categories.map(function (e) { return e.code; }).indexOf(category);
			this.selectedCategory = this.categories[index]
			this.catagoryService.getSubcategory(category).subscribe((data: any) => {
				this.subCategories = data;
				var subCatindex = data.map(function (e) { return e.subcategory.code; }).indexOf(subcategory);
				this.selectedSubCategory = this.subCategories[subCatindex]['subcategory']
				this.catagoryService.getSegment(this.selectedSubCategory.code).subscribe((data: any) => {
					this.segments = data;
					var segmentIndex = data.map(function (e) { return e.segment.code; }).indexOf(segment);
					this.selectedSegment = this.segments[segmentIndex]['segment']
					this.catagoryService.getSubSegment(segment).subscribe((data: any) => {
						this.subSegments = data;
						var subSegmentIndex = data.map(function (e) { return e.subsegment.code; }).indexOf(subsegment);
						this.selectedSubSegment = this.subSegments[subSegmentIndex]['subsegment']
						this.catagoryService.getLeaftype(subsegment).subscribe((data: any) => {
							this.leafType = data;
							var leafTypeIndex = data.map(function (e) { return e.leaftype.code; }).indexOf(leaftype);
							this.selectedLeafType = this.leafType[leafTypeIndex]['leaftype']
							this.catagoryService.getVechicle(leaftype).subscribe((data: any) => {
								this.vechicles = data;
								var vechicleIndex = data.map(function (e) { return e.vechicle.code; }).indexOf(vechicle);
								this.selectedVechicle = this.vechicles[vechicleIndex]['vechicle']
								this.catagoryService.getLeafposition(vechicle).subscribe((data: any) => {
									this.leafPosition = data;
									var leafPostionIndex = data.map(function (e) { return e.leafposition.code; }).indexOf(leafposition);
									this.selectedLeafPosition = this.leafPosition[leafPostionIndex]['leafposition']
									this.catagoryService.getVechiclemodel(leafposition).subscribe((data: any) => {
										this.vechicleModel = data;
									});
								});
							});
						});
					});
				});
			});
		});
	}

	loadVechicleModelInit(category, subcategory, segment, subsegment, leaftype, vechicle, leafposition, vechiclemodel) {
		this.catagoryService.getRootTopCategories().subscribe((data: any) => {
			this.categories = data;
			var index = this.categories.map(function (e) { return e.code; }).indexOf(category);
			this.selectedCategory = this.categories[index]
			this.catagoryService.getSubcategory(category).subscribe((data: any) => {
				this.subCategories = data;
				var subCatindex = data.map(function (e) { return e.subcategory.code; }).indexOf(subcategory);
				this.selectedSubCategory = this.subCategories[subCatindex]['subcategory']
				this.catagoryService.getSegment(this.selectedSubCategory.code).subscribe((data: any) => {
					this.segments = data;
					var segmentIndex = data.map(function (e) { return e.segment.code; }).indexOf(segment);
					this.selectedSegment = this.segments[segmentIndex]['segment']
					this.catagoryService.getSubSegment(segment).subscribe((data: any) => {
						this.subSegments = data;
						var subSegmentIndex = data.map(function (e) { return e.subsegment.code; }).indexOf(subsegment);
						this.selectedSubSegment = this.subSegments[subSegmentIndex]['subsegment']
						this.catagoryService.getLeaftype(subsegment).subscribe((data: any) => {
							this.leafType = data;
							var leafTypeIndex = data.map(function (e) { return e.leaftype.code; }).indexOf(leaftype);
							this.selectedLeafType = this.leafType[leafTypeIndex]['leaftype']
							this.catagoryService.getVechicle(leaftype).subscribe((data: any) => {
								this.vechicles = data;
								var vechicleIndex = data.map(function (e) { return e.vechicle.code; }).indexOf(vechicle);
								this.selectedVechicle = this.vechicles[vechicleIndex]['vechicle']
								this.catagoryService.getLeafposition(vechicle).subscribe((data: any) => {
									this.leafPosition = data;
									var leafPostionIndex = data.map(function (e) { return e.leafposition.code; }).indexOf(leafposition);
									this.selectedLeafPosition = this.leafPosition[leafPostionIndex]['leafposition']
									this.catagoryService.getVechiclemodel(leafposition).subscribe((data: any) => {
										this.vechicleModel = data;
										var vechiclemodelIndex = data.map(function (e) { return e.vechiclemodel.code; }).indexOf(vechiclemodel);
									    this.selectedVechiclemodel = this.vechicleModel[vechiclemodelIndex]['vechiclemodel']
									});
								});
							});
						});
					});
				});
			});
		});
	}


	loadSubCategory() {
		this.catagoryService.getSubcategory(this.selectedCategory.code).subscribe((data: any) => {
			this.subCategories = data;
			window.location.href = 'home?category=' + this.selectedCategory.code
		});
	}
	loadSegment() {
		if (this.selectedCategory && this.selectedSubCategory) {
			window.location.href = 'home?category=' + this.selectedCategory.code + '&subcategory=' + this.selectedSubCategory.code
		}
	}

	loadSubSegment() {
		if (this.selectedCategory && this.selectedSubCategory && this.selectedSegment) {
			window.location.href = 'home?category=' + this.selectedCategory.code + '&subcategory=' + this.selectedSubCategory.code + '&segment=' + this.selectedSegment.code
		}

	}
	loadLeafType() {
		if (this.selectedCategory && this.selectedSubCategory && this.selectedSegment && this.selectedSubSegment) {
			window.location.href = 'home?category=' + this.selectedCategory.code + '&subcategory=' + this.selectedSubCategory.code + '&segment=' + this.selectedSegment.code
				+ '&subsegment=' + this.selectedSubSegment.code
		}

	}
	loadVechicle() {
		if (this.selectedCategory && this.selectedSubCategory && this.selectedSegment && this.selectedSubSegment && this.selectedLeafType) {
			window.location.href = 'home?category=' + this.selectedCategory.code + '&subcategory=' + this.selectedSubCategory.code + '&segment=' + this.selectedSegment.code
				+ '&subsegment=' + this.selectedSubSegment.code + '&leaftype=' + this.selectedLeafType.code
		}

	}

	loadLeafPosition() {
		if (this.selectedCategory && this.selectedSubCategory && this.selectedSegment && this.selectedSubSegment && this.selectedLeafType && this.selectedVechicle) {
			window.location.href = 'home?category=' + this.selectedCategory.code + '&subcategory=' + this.selectedSubCategory.code + '&segment=' + this.selectedSegment.code
				+ '&subsegment=' + this.selectedSubSegment.code + '&leaftype=' + this.selectedLeafType.code + '&vechicle=' + this.selectedVechicle.code
		}
		
	}

	loadVechicleModel() {
		if (this.selectedCategory && this.selectedSubCategory && this.selectedSegment && this.selectedSubSegment && this.selectedLeafType && this.selectedVechicle) {
			window.location.href = 'home?category=' + this.selectedCategory.code + '&subcategory=' + this.selectedSubCategory.code + '&segment=' + this.selectedSegment.code
				+ '&subsegment=' + this.selectedSubSegment.code + '&leaftype=' + this.selectedLeafType.code + '&vechicle=' + this.selectedVechicle.code+'&leafposition=' +this.selectedLeafPosition.code
		}
	}
	loadProduct() {
		if (this.selectedCategory && this.selectedSubCategory && this.selectedSegment && this.selectedSubSegment && this.selectedLeafType && this.selectedVechicle) {
			window.location.href = 'home?category=' + this.selectedCategory.code + '&subcategory=' + this.selectedSubCategory.code + '&segment=' + this.selectedSegment.code
				+ '&subsegment=' + this.selectedSubSegment.code + '&leaftype=' + this.selectedLeafType.code + '&vechicle=' + this.selectedVechicle.code+'&leafposition=' +this.selectedLeafPosition.code
				+'&vechiclemodel='+this.selectedVechiclemodel.code
		}
	}

	openSubCat(event, cat: Category, type) {
		let breadcrum = []
		breadcrum.push(cat)
		window.localStorage.setItem('breadcrum', JSON.stringify(breadcrum))
		window.location.href = '/home?category=' + cat.code
	}

	selectBreadCrum(cat: Category) {
		let newBreadCrum = []
		if (cat) {
			const result = this.catagoryService.topcat ? this.catagoryService.topcat : [];
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

	backClicked() {
		window.history.go(-1)
	}

	filterCategory(data){
		window.location.href = '/products?item_code=' + data.code
	}

}
