import { Component, OnInit } from '@angular/core';
import { CatagoryService } from '../service/catagory.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../model/user.model';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  stateList:any = []
  constructor(private service: CatagoryService, private router: Router,) { }
  ngOnInit() {
    this.service.stateList().subscribe((data:any) => {
      this.stateList = data;
    });
  }

  register(form: NgForm) {
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const emailId = form.value.emailId;
    const password1 = form.value.password1;
    const password2 = form.value.password2;
    const username = form.value.username;
    let state = form.value.slist
    if(!firstName && !lastName && !emailId && !password1 && !password2 && !username){
      alert("Please fill all mandatory fields!")
      return false
    }
    if (password1 !== password2) {
      alert("Password dont match");
      return;
    }
    var userLoad = new User();
    userLoad.first_name = firstName;
    userLoad.last_name = lastName;
    userLoad.email = emailId;
    userLoad.password1 = password1;
    userLoad.password2 = password2;
    userLoad.username = username;
    userLoad.state = state;
    this.service.createUser(userLoad).subscribe(
      (result:any) => {
        // Handle result
        alert('Your account has been created successfully!');
        this.router.navigate(['/']);
      },
      error => {
        alert("Please fill all mandatory fields and try again!");
        this.router.navigate(['/']);
      },
      () => {
         this.router.navigate(['/']);
      }
    );
    
    
    
    
    // subscribe((data:any) => {
    //   console.log(data)
    //   if(data.detail){
    //     alert(data.detail);
    //     this.router.navigate(['/']);
    //   }
    //   else
    //   {
    //     alert("Please verify your email or password");
    //   }
      
    // });
  }
}
