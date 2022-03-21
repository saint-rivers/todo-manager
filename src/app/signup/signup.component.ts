import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

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

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  loginUser(): void {
    alert(`${this.email.value} ${this.password.value}`);
    this.authService.login(this.email.value, this.password.value);
  }
}
