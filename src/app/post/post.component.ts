import { Component, OnInit } from '@angular/core';
import { createPost } from '../models/postModels';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: createPost[] = [];
  editEventObj: any = {};
  constructor() {
    // this.posts = [];
  }

  ngOnInit(): void {
  }
  onPostCreate(postData: createPost) {
    console.log("inside onPostCreate", postData);
    this.posts.push(JSON.parse(JSON.stringify(postData)));
  }
  onPostEdit(eventObj: any) {
    console.log('inside Post edit', eventObj);
    this.editEventObj = eventObj;
  }
}
