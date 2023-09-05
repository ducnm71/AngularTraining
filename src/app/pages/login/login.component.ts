import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService){}

  public formData = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  getErrorMessageEmail() {
    if (this.formData.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.formData.controls.email.hasError('email')){
      return  'Not a valid email';
    }

    return 'hehe';
  }

  getErrorMessagePassword() {

    if (this.formData.controls.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.formData.controls.email.hasError('password') ? 'At least 8 characters' : '';
  }


  login() {
    // console.log(this.formData.getRawValue());
    // this.router.navigate(['/home'])
    const dataLogin = this.formData.getRawValue()
    this.userService.signIn(dataLogin).subscribe(data => {
      // console.log(data.jwt);
      localStorage.setItem('token', data.jwt)
      window.location.replace('/main')
    })
  }
}


