import { Component, OnInit, OnDestroy } from '@angular/core';

//import the apolloangular service
import {ApolloangularService} from "../apolloangular.service";
import { Subscription } from 'apollo-client/util/Observable';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
//might also need to implement onDestroy?
export class PostsComponent implements OnInit, OnDestroy {

  public postsArray: any[] = [];
  public loadingState: boolean; 

  private querySubscription: Subscription;

  constructor(private apolloAngularService: ApolloangularService ) { }

  //get posts
  public posts(){
  
   this.querySubscription = this.apolloAngularService.getPosts().valueChanges.subscribe(({data, loading}) =>{
        this.loadingState = loading;
        this.postsArray = data.posts;
        console.log(data);
      });
   
  }


  ngOnInit(): void {
    this.posts();
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

}
