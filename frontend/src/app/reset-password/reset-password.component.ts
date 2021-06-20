import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { CatagoryService } from '../service/catagory.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  loginuser: boolean = false;
  uid: string;
  token:string;
  constructor(private route: ActivatedRoute,  private router: Router, private service: CatagoryService) { }

  ngOnInit() {
    window.localStorage.removeItem('token');
     this.route.params.subscribe(params => {
        this.uid = params['uid'];
        this.token = params['token'];
    });
  }

  onSubmit(form: NgForm) {
    console.log("ds",form.value.new_password)
    if(form.value.new_password){
      let new_password = form.value.new_password
      let confirm_password = form.value.confirm_password
      if (new_password !== confirm_password) {
        alert("Password dont match");
        return;
      }
      const loginPayload = {
        new_password1: new_password,
        new_password2: confirm_password,
        uid: this.uid,
        token: this.token,
      }
      this.service.resetPasswordConfirm(loginPayload).subscribe((data: any) => {
       alert(data.detail)
      },
      error => {
        alert("Please enter your password");
      },
      () => {
        this.router.navigate(['/login']);
      }
    )
    }else{
      alert("Please enter your password");
      return false;
    }
    
  }

}
