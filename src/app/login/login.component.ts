import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { User } from './user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private accountService: AccountService) { }

  model: User = new User();

  login(form:NgForm){
    this.accountService.login(this.model)
    // console.log(this.model.userName)
    // console.log(this.model.password)
    // console.log(this.accountService.isLoggedIn())
  }


}
