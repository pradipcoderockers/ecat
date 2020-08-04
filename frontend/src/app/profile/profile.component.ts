import { Component, OnInit } from '@angular/core';
import { CatagoryService } from '../service/catagory.service';
import { User } from '../model/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  stateList:any = []
  userType = [{id:1,name:'Retailer'},{id:2,name:'Distributor'},{id:3,name:'General User'}]
  constructor(private service:CatagoryService) { }

  ngOnInit() {
    this.service.getUserDetail().subscribe((data:any) => {
      this.user = data;
    });
    this.service.stateList().subscribe((data:any) => {
      this.stateList = data;
    });
  }
  updateProfile(){
    this.service.updateProfile(this.user,this.user.id).subscribe((data:any) => {
      console.log(data)
      if(data=="updated"){
        alert("Profile has been updated successfully!")
      }
      else{
        alert("Error!")
      }
    });
    
  }
  

}
  