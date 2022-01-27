import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { createPost } from '../models/postModels';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit, OnChanges {
  @Output() postCreated = new EventEmitter<createPost>();

  @Input() postList: createPost[] = [];
  @Input() postEdit: any = {};
  postObj: createPost = {
    postAuthor: "",
    postName: "",
    postDesc: ""
  };
  updateButton: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const currentValue = changes['postEdit'].currentValue;
    console.log('currentValue', changes['postEdit'].currentValue);
    if (currentValue.hasOwnProperty('index')) {
      this.postObj = { ...this.postList[currentValue.index] };
      console.log('this.postObj', this.postObj);
      this.updateButton = true;
    }
    // You can also use categoryId.previousValue and
    // categoryId.firstChange for comparing old and new values

  }

  postCreate(event: any) {
    console.log("inside postCreate");
    console.log("event", event);
    if (this.postObj.postName != "" && this.postObj.postAuthor != "" && this.postObj.postDesc.trim() != "") {
      for (let i = 0; i < this.postList.length; i++) {
        if (this.postObj.postName == this.postList[i].postName) {
          alert("value repeat");
          return;
        }
      }
      this.postCreated.emit(this.postObj);
      this.postObj.postName = '';
      this.postObj.postAuthor = '';
      this.postObj.postDesc = '';

    }
  }

  postUpdate(index: number) {
    console.log('inside update..........');
    if (this.postObj.postName != "" && this.postObj.postAuthor != "" && this.postObj.postDesc.trim() != "") {
      this.postList[index] = { ...this.postObj };
      this.postObj.postName = '';
      this.postObj.postAuthor = '';
      this.postObj.postDesc = '';
      this.updateButton = false;
    }
  }
}
