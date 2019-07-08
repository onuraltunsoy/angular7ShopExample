import { Component, OnInit } from '@angular/core';
import { AccountService } from './service/account.service';
import { NgForm } from '@angular/forms';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: User = new User();

  constructor(private accountService: AccountService, private router: Router) { }
  login(form: NgForm) {
    var deneme = this.accountService.login(this.model);
    console.log("user", this.model);

    this.router.navigate([""]);
  }

  ngOnInit() {
  }

}
