import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginName = ''

  constructor(private router: Router){}

  getValue(event: Event) {
    console.log((event.target as HTMLInputElement).value);
    this.loginName = (event.target as HTMLInputElement).value
  }

  login() {
    this.router.navigate(['/home', this.loginName])
 }

}
