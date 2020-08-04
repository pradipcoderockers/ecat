import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { NgForm } from '@angular/forms';
import { Role } from '../model/role.model';
import { CatagoryService } from '../service/catagory.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {
  roles: Array<Role>;
  constructor(private service: CatagoryService) { }
  ngOnInit() {
  }
  register(form: NgForm) {

    const first_name = form.value.firstName;
    const last_name = form.value.lastName;
    const email = form.value.emailId;
    const password1 = form.value.password1;
    const password2 = form.value.password2;
    const username = form.value.username;
    if (password1 !== password2) {
      alert("Password dont match");
      return;
    }
    var userLoad = new User();
    userLoad.first_name = first_name;
    userLoad.last_name = last_name;
    userLoad.email = email;
    userLoad.password1 = password1;
    userLoad.password2 = password2;
    userLoad.username = username;
    this.service.createUser(userLoad).subscribe(data => {
      alert(data.message);
    });
    // console.log(postLoad);
  }

}
