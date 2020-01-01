import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionmanagerService {
  login_status_key = "lbstudent";
  constructor(private router: Router) { }

  doLogin(email, password) {
    if (email == "medha@learnerbee.in" && password == "medha8055") {
      localStorage.setItem(this.login_status_key, "true");
      this.router.navigate(["/"]);
    } else {
      console.log("Invalid Credentials");
    }
  }

  getloginStatus() {
    if (localStorage.getItem(this.login_status_key)) {
      return true;
    }

    return false;
  }

  doLogout() {
    localStorage.removeItem(this.login_status_key);
    this.router.navigate(["login"]);
  }
}
