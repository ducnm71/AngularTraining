import { NgModule } from '@angular/core';
import { ResolveFn, RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ChildComponent } from './components/child/child.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home/:name', component: HomeComponent},
  {path: 'parent', component: ParentComponent,
    children: [
      {path: 'child', component: ChildComponent},
    ]
  },

  {path: '**', component: PageNotFoundComponent}
];
const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child');
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
