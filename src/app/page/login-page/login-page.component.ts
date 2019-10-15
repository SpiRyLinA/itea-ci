import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  public doLogin(): void {

  }

  private createForm(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(128),
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(128),
      ])],
    });
  }

}
