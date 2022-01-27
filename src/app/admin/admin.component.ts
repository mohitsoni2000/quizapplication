import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
addQuestions: any = {
  "questions": [
    {
      "questionText": "",
      "options": [
        {
          "text": "",
          "correct": false
        },
        {
          "text": "",
          "correct": false

        },
        {
          "text": "",
          "correct": false

        },
        {
          "text": "",
          "correct": false

        }
      ],
    }
  ]
}

  constructor() { }

  ngOnInit(): void {
  }
addedQuestion(){
  console.log('Questions Added')
  }



}
