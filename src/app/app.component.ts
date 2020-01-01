import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lbstudent';
  constructor(private router: Router) {

  }

  navigate(nav_to) {
    console.log("Nav Function");
    this.router.navigate([nav_to]);
  }
}
