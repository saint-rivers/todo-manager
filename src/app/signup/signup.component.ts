import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');

  credentials = new FormGroup({
    email: this.email,
    password: this.password,
  });

  constructor() {}

  ngOnInit(): void {}

  loginUser() {
    alert(`${this.email.value} ${this.password.value}`);
  }
}
