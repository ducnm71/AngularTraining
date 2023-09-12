import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

import { Router } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  standalone: true,
  imports: [MatSidenavModule, NgIf, MatButtonModule, MatIconModule],
})
export class SideNavComponent {
  showFiller = false;
  constructor(private router: Router){}

  listStory() {
    this.router.navigate(['/main'])
  }
}
