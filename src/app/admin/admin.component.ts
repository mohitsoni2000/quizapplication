import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  addQuestions: any = {
    questions: {
      questionText: '',
      options: [
        {
          text: '',
          correct: true,
        },
        {
          text: '',
          correct: false,
        },
        {
          text: '',
          correct: false,
        },
        {
          text: '',
          correct: false,
        },
      ],
    },
  };
  constructor() {}

  ngOnInit(): void {}
  addedQuestion() {
    console.log(this.addQuestions);
    // console.log(this.addQuestions.questions.options);
    console.log(this.addQuestions.questions.answer);
   this.addQuestions = localStorage.setItem("Questions" , JSON.stringify( this.addQuestions.questions));
 this.addQuestions = [this.addQuestions, ...this.addQuestions ]
// this.added = this.addQuestions.questions;
  }
added(){

}


  onRadioChange(i: any) {
    console.log(console.log(this.addQuestions.questions.options[i].correct));

    this.addQuestions.questions.options.forEach((el: any) => {
      el.correct = false;
    });
    this.addQuestions.questions.options[i].correct = true;
  }
}
