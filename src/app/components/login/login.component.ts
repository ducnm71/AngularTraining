import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // public formData: FormGroup = new FormGroup({
  //   loginName: new FormControl('')
  // });

  public formData2 = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

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
