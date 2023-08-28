import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServerService } from 'src/app/Services/http-server.service';

import { StoryNameComponent } from './story-name/story-name.component';
import { PageContentStoryComponent } from './page-content-story/page-content-story.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [StoryNameComponent, PageContentStoryComponent]
})
export class HomeComponent implements OnInit {

  constructor(private httpServerService: HttpServerService){}
  users: any[] = [];
  // loginName = ''
  // constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
      // this.router.params.subscribe(params => {
      //   this.loginName = params['name']
      //   console.log(params['name']);

      // })
      this.fetchUsers()

  }

  fetchUsers(): void {
    this.httpServerService.getUsers().subscribe(data => {
      console.log('data', data);
      this.users = data
      console.log('users',this.users);

    })
  }
}
