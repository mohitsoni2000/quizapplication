import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { createPost } from '../models/postModels';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnChanges {
  @Output() postEdit = new EventEmitter<{ action: string, index: number }>();
  @Input() postList: createPost[] = [];
  deleteDis: boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log('postList', this.postList);
  }
  ngOnChanges(changes: SimpleChanges) {
    const currentValue = changes['postList'].currentValue;
    console.log('postList', changes['postList'].currentValue);

    // if (currentValue.hasOwnProperty('index')) {

    //   console.log('this.postList j...');
    //   this.deleteDis = false;
    // }
    // You can also use categoryId.previousValue and
    // categoryId.firstChange for comparing old and new values

  }
  onPostDelete(index: number) {
    console.log('delete post')
    // const index: number = this.postList.indexOf(post);
    console.log('index....', index);
    this.postList.splice(index, 1);

  }
  onPostEdit(index: number) {
    console.log('edit post');
    const eventObj: any = { action: 'edit-post', index: index };
    this.postEdit.emit(eventObj);
    this.deleteDis = true;
    // eventObj["action2"] = "true";

  }



}
