import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CatagoryService } from '../service/catagory.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  loginuser: boolean = false;


  constructor(private formBuilder: FormBuilder, private router: Router, private service: CatagoryService) { }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    if(this.loginForm.controls.username.value && this.loginForm.controls.password.value){
      const loginPayload = {
        email: this.loginForm.controls.username.value,
        password: this.loginForm.controls.password.value
      }
      this.service.login(loginPayload).subscribe((data: any) => {
        if (data.key) {
          this.loginuser = true;
          window.localStorage.setItem('token', data.key);
          window.location.href = '/'
        } else {
          this.invalidLogin = true;
          alert(data.message);
        }
      },
      error => {
        alert("Please enter valid username and password!");
      },
      () => {
         this.router.navigate(['/login']);
      }
    )
    }else{
      alert("Please enter valid username and password!");
      return false;
    }
    
  }
}
