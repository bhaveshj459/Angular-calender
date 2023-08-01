import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: '',
  };
  showAlert = false;
  alertMsg = 'Please Wait! Your account is being created';
  alertColor = 'blue';

  constructor() {}

  login() {
    this.showAlert = true;
    this.alertMsg = 'Please Wait! Your account is being loggin';
    this.alertColor = 'blue';
  }

  ngOnInit(): void {}
}
