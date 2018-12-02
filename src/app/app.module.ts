import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module'; //added graphql module

//import the form modules
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AppRoutingModule } from './app-routing.module';

//apolloangular service
import {ApolloangularService} from "./apolloangular.service";


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApolloangularService],
  bootstrap: [AppComponent]
})
export class AppModule { }
