import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  public doLogin(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      console.log({login: this.loginControl.value, password: this.passwordControl.value});
    }
  }

  get loginControl(): AbstractControl {
    return this.loginForm.controls.login;
  }

  get passwordControl(): AbstractControl {
    return this.loginForm.controls.password;
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
