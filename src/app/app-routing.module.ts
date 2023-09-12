import { NgModule } from '@angular/core';
import { ResolveFn, RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/test/parent/parent.component';
import { PageNotFoundComponent } from './components/test/page-not-found/page-not-found.component';
import { ChildComponent } from './components/test/child/child.component';
// import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './pages/login/login.component';
// import { TextComponent } from './pages/page/text/text.component';
import { WordComponent } from './pages/word/word.component';
import { PageComponent } from './pages/page/page.component';
import { ListStoryComponent } from './components/list-story/list-story.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path:'main',  component: ListStoryComponent},
  {path: 'story/:id', component: HomeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'word/:storyId', component: WordComponent},
  {path: 'story/:storyId/page/:pageId', component: PageComponent}
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
