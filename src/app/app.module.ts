import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { TextComponent } from './pages/text/text.component';
import { HeaderComponent } from './components/header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LoginComponent,
    HttpClientModule,
    HomeComponent,
    TextComponent,
    HeaderComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
