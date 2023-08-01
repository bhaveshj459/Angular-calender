import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
interface Iuser {
  name: string;
  email: string;
  age: number;
  password?: string;
  phoneNumber: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private auth: AuthService) {}
  InSubmision = false;

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.email]);
  age = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(18),
    Validators.max(150),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  confirm_password = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(13),
  ]);

  showAlert = false;
  alertMsg = 'Please Wait! Your account is being created';
  alertColor = 'blue';

  registerForms = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber,
  });

  async register() {
    this.showAlert = true;
    this.alertMsg = 'Please Wait! Your account is being created';
    this.alertColor = 'blue';
    this.InSubmision = true;

    try {
      this.auth.createUser(this.registerForms.value as Iuser);
    } catch (e) {
      console.log('error123' + e);
      this.alertMsg = '' + e;
      this.alertColor = 'red';
      this.InSubmision = false;
      return;
    }

    this.alertMsg = 'Successfuly Created Account';
    this.alertColor = 'green';
  }
}
