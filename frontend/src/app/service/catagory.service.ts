import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/index";
import{environment } from "../../environments/environment";
import { ApiResponse } from '../model/api.response';
import { User } from '../model/user.model';
import { Item } from '../model/item.model';
import { AddCartItemRequest } from '../model/add-cart-item-request.model';

@Injectable({
  providedIn: 'root'
})
export class CatagoryService {
	
	topcat: [];

  
  deleteCartItem(arg0: { "userId": number; "itemId": number; "page_type": string;}): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+"/cart/deleteItem", arg0);
  }
  
  addtoCartFvrtItem(arg0: { "userId": number; "itemId": number; "page_type": string;}): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+"/cart/addtoCartFvrtItem", arg0);
  }


  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+"/auth/registration/", user);
  }

  getUserByUserName(userName: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'/users/byName/'+ userName);
  }
  getUserDetail(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'/me/');
  }
  

  verifyAccount(code: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'/auth/account-confirm-email/'+ code);
  }

  getAllRoles(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'/role/getRoles');
  }

  stateList(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'/api/state');
  }
  

  constructor(private http: HttpClient) { }

  baseUrl: string = environment.baseUrl;
  baseUrln: string = environment.baseUrln;
  apiPath: string = '/category';

  createOrder(): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl +'/api/orders',{} );
  } 
  getOrders(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'/api/orders' );
  } 
  getAllCategories(): Observable<ApiResponse> {
    //console.log("Test");
    return this.http.get<ApiResponse>(this.baseUrl+this.apiPath+"/all");
  }
  getRootCategories(): Observable<ApiResponse> {
    //console.log("Test");
    return this.http.get<ApiResponse>( this.baseUrln+this.apiPath+"/root");
  }
  getOrderById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrln+"/orderlist/&id="+id );
  }
  getOrderByIdDetails(id: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+"/api/order/"+id+"/" );
  }
  getRootTopCategories(): Observable<ApiResponse> {
    //console.log("Test");
    return this.http.get<ApiResponse>( this.baseUrl+"/api/categories");
  }
  getSubcategory(code: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+"/api/subcategory?code="+code);
  }
  getSegment(code: string,category:string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+"/api/segment?code="+code+"&category="+category);
  }
  getSubSegment(code: string,category:string,subcategory:string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+"/api/subsegment?code="+code+"&category="+category+"&subcategory="+subcategory);
  }
  getLeaftype(category:string, subcategory:string, segment:string, subsegmentcode: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+"/api/leaftype?code="+subsegmentcode+"&segment="+segment+"&category="+category+"&subcategory="+subcategory);
  }
  getVechicle(category:string, subcategory:string, segment:string, subsegmentcode: string,code: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+"/api/vechicle?code="+code+"&subsegment="+subsegmentcode+"&segment="+segment+"&category="+category+"&subcategory="+subcategory);
  }
  getLeafposition(category:string, subcategory:string, segment:string, subsegmentcode: string,leaftype:string,code: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+"/api/leafposition?code="+code+"&leaftype="+leaftype+"&subsegment="+subsegmentcode+"&segment="+segment+"&category="+category+"&subcategory="+subcategory);
  }
  getVechiclemodel(category:string, subcategory:string, segment:string, subsegmentcode: string,leaftype:string,leafposition:string,code: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+"/api/vechiclemodel?code="+code+"&leafposition="+leafposition+"&leaftype="+leaftype+"&subsegment="+subsegmentcode+"&segment="+segment+"&category="+category+"&subcategory="+subcategory);
  }
  getRootTopLeafCategories(): Observable<ApiResponse> {
    //console.log("Test");
    return this.http.get<ApiResponse>( this.baseUrln+this.apiPath+"/roottopleaf");
  }
  brandsVihcleCategories(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>( this.baseUrl+"/api/brand");
  }
  getProudcts(params: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+"/api/products?"+params);
  }
  modelsCategories(): Observable<ApiResponse> {
    //console.log("Test");
    return this.http.get<ApiResponse>( this.baseUrln+this.apiPath+"/modelsCategories");
  }

  getCategoryById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrln+this.apiPath+"/&id="+id+"&rootCat="+window.localStorage.getItem('RootCat')+"&secondlevelCatleaf="+window.localStorage.getItem('LEAFSPRING_secondlevelCat'));
  }

  getProductById(id: number,productlink): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrln+"/"+productlink+"/&id="+id+"&rootCat="+window.localStorage.getItem('RootCat')+"&secondlevelCat="+window.localStorage.getItem('secondlevelCat')+"&state="+window.localStorage.getItem('user_state'));
  }
  getProductByIds(ids: string,productlink): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrln+"/"+productlink+"/&ids="+ids+"&rootCat="+window.localStorage.getItem('RootCat')+"&secondlevelCat="+window.localStorage.getItem('secondlevelCat')+"&state="+window.localStorage.getItem('user_state'));
  }
   getfavouriteById(username: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrln+"/getfavouriteById/&username="+username);
  }
   addfavouriteById(username: string,textdata: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrln+"/addfavouriteById/&username="+username+"&textdata="+textdata,{username:username});
  }
  deletefavouriteById(username: string,id: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrln+"/deletefavouriteById/&username="+username+"&id="+id,{username:username});
  }
  
  updateProfile(user: any,id: number): Observable<ApiResponse> {
    return this.http.patch<ApiResponse>(this.baseUrl+"/accounts/"+id+"/",user);
  }
  getCart(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+"/api/cart");
  }
  deleteCart(id): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl+"/api/cart/"+id);
  }
  postCart(data: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+"/api/cart",data);
  }
  getFavourite(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+"/api/favourite");
  }
  deleteFavourite(id): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl+"/api/favourite/"+id);
  }
  postFavourite(data: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+"/api/favourite",data);
  }

  getItemByCode(code: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+"/item/byCode/"+code);
  }

  login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(environment.baseUrl + '/auth/login/', loginPayload);
  }

  resetPassword(data) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(environment.baseUrl + '/auth/password/reset/', data);
  }
  resetPasswordConfirm(data) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(environment.baseUrl + '/auth/password/reset/confirm/', data);
  }

  uploadFile(data: FormData): Observable<HttpEvent<string>>{
    const uploadReq = new HttpRequest('POST', this.baseUrl+'/fileUpload/', data, {
      reportProgress: true,
  });
    return this.http.request(uploadReq);
  }

  addToCart(cartRequest : AddCartItemRequest): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrln + '/cart/addItem', cartRequest);
  }

  getCartItem(userId,type,fvrtid): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+"/cart/"+userId+"/"+type+"/"+fvrtid);
  }
  

}
