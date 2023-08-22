import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginName = ''
  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
      this.router.params.subscribe(params => {
        this.loginName = params['name']
        console.log(params['name']);

      })
  }
}
