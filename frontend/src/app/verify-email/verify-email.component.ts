import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatagoryService } from '../service/catagory.service';
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
	constructor(private router: Router, private route: ActivatedRoute, public service: CatagoryService) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.verifyAccount(params['code']).subscribe(data => {
        this.router.navigate(['/login']);
    });
  });
  }

}
