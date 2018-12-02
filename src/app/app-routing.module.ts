import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

//import the components
import {PostsComponent} from "./posts/posts.component";
import {AddPostComponent} from "./add-post/add-post.component";


//create the routes
const routes: Routes = [
    {path:"", component: PostsComponent},
    {path: "addpost", component: AddPostComponent} 
]



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
