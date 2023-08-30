import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTabsModule]
})
export class PageComponent {
  constructor(private router: Router) {}

  backStory(){
    this.router.navigate(['/'])
  }
}
