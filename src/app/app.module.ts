import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { VoteComponent } from './vote/vote.component';
import { ExtraitPipe } from './extrait.pipe';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  { path: 'courses', component: CoursesComponent },
  { path: 'posts', component: PostsComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NavbarComponent,
    SidebarComponent,
    Content1Component,
    Content2Component,
    VoteComponent,
    ExtraitPipe,
    PostsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
