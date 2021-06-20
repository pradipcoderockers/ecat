import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CatagoryService } from '../service/catagory.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  loginuser: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private service: CatagoryService) { }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
    });
  }

  onSubmit() {
    if(this.loginForm.controls.username.value){
      const loginPayload = {
        email: this.loginForm.controls.username.value,
      }
      this.service.resetPassword(loginPayload).subscribe((data: any) => {
       alert(data.detail)
      },
      error => {
        alert("Please enter valid email");
      },
      () => {
        location.reload()
      }
    )
    }else{
      alert("Please enter valid email");
      return false;
    }
    
  }

}
