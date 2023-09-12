import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { ParentComponent } from './components/test/parent/parent.component';
import { ChildComponent } from './components/test/child/child.component';
import { PageNotFoundComponent } from './components/test/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { TextComponent } from './pages/page/text/text.component';
import { WordComponent } from './pages/word/word.component';
import { PageComponent } from './pages/page/page.component';
import { ListStoryComponent } from './components/list-story/list-story.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    PageNotFoundComponent,
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LoginComponent,
    HeaderComponent,
    SideNavComponent,
    HttpClientModule,
    ListStoryComponent,
    HomeComponent,
    TextComponent,
    WordComponent,
    PageComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
