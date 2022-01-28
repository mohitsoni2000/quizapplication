import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
addQuestions: any = {
  "questions": {
    "questionText": "",
    "options": [
      {
        "text": "",
        "correct": "true"
      },
      {
        "text": "",
        "correct": "true"

      },
      {
        "text": "",
        "correct": "true"

      },
      {
        "text": "",
        "correct": "true"

      }
    ]
  }
}
  constructor() { }

  ngOnInit(): void {
  }
addedQuestion(){
  }

radioSelected(){

}

}
