import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {ErrorStateMatcher} from '@angular/material/core';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
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
    MatDividerModule
  ],
})
export class LoginComponent implements OnInit {

  // public formData: FormGroup = new FormGroup({
  //   loginName: new FormControl('')
  // });

  public formData2 = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private fb: FormBuilder){}

  // getValue(event: Event) {
  //   console.log((event.target as HTMLInputElement).value);
  //   this.loginName = (event.target as HTMLInputElement).value
  // }

  ngOnInit(): void {
  }

  login() {
    // this.router.navigate(['/home', this.formData.value])
    console.log(this.formData2.value);

 }

}
