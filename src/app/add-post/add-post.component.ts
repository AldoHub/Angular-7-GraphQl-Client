import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

//import the service
import {ApolloangularService} from "../apolloangular.service";


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  
  constructor(private apolloAngularService: ApolloangularService) { }

  //create the form
  public addPostForm = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required)
  });


  //function to add the post to the GraphQl Node Mongo Server
   public addpost(formData: HTMLFormElement){
    //set the new post properties
    let newpost = {
      name: formData.name,
      description: formData.description
     }
    // make the call to the server to save the info
     
     this.apolloAngularService.newPost(newpost).subscribe(({data}) => {
      console.log(data);
      this.addPostForm.setValue({
        name: '',
        description: ''
      });
     
     });


  }

  ngOnInit() {
    
  }

}
