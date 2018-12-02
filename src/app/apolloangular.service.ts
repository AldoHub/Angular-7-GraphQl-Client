import { Injectable } from '@angular/core';

//import Apollo
import {Apollo} from "apollo-angular";
//gql
import gql from "graphql-tag";



@Injectable({
  providedIn: 'root'
})
export class ApolloangularService {
  
  constructor(private ApolloClient: Apollo){

  }

 
  //-------- apollo graphql queries and mutations
    
  //get posts
  public getAllPosts = gql`
  query getAllposts {
    posts {
      _id
      name
    
    }
  }

  `;

 //mutation
 public addPost = gql`
  mutation createPost($name: String!, $description: String!) {
    createPost(name: $name, description: $description){
      _id
      name
      description
    }
  }
 
 `;


 //get all posts
 public getPosts() {
    return this.ApolloClient.watchQuery<any>({
    //the query to exec
    query: this.getAllPosts

  });
  
 }

 //add a post to MongoDb
 public newPost(postData: any){
    return this.ApolloClient.mutate({
      mutation: this.addPost,
      variables: {
        name: postData.name,
        description: postData.description
      },
      refetchQueries: [{
        query: this.getAllPosts
      }]
    });
 }




  
}
