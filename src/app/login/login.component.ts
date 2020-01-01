import { SessionmanagerService } from './../services/sessionmanager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private sm: SessionmanagerService) { }

  ngOnInit() {

  }

  login() {
    let email = "medha@learnerbee.in";
    let password = "medha8055";
    this.sm.doLogin(email, password);
  }

}
