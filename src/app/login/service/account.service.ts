import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
  loggedIn = false;
  login(user: User): boolean {
    if (user.userName == "onur" && user.password == "123") {
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.userName);
      console.log("isLogged", true);
      return true;

    }
    return false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
  logOut() {
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }
}
