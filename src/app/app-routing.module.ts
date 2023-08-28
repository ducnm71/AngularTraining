import { NgModule } from '@angular/core';
import { ResolveFn, RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/test/parent/parent.component';
import { PageNotFoundComponent } from './components/test/page-not-found/page-not-found.component';
import { ChildComponent } from './components/test/child/child.component';
// import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TextComponent } from './pages/text/text.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'text', component: TextComponent}
  // {path: 'home/:name', component: HomeComponent},
  // {path: 'parent', component: ParentComponent,
  //   children: [
  //     {path: 'child', component: ChildComponent},
  //   ]
  // },

  // {path: '**', component: PageNotFoundComponent}
];
const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child');
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
