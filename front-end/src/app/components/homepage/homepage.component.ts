import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public showLogin = true;
  public showRegister = false;
  public button = 'Login';

  constructor() { }

  ngOnInit() {
  }

  toggleLogin() {
    this.showLogin = true;
    this.showRegister = false;
  }
  toggleRegister() {
    this.showLogin = false;
    this.showRegister = true;
  }

}
