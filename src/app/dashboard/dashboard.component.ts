import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionModel } from '../admin/question-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  questionObj: QuestionModel = new QuestionModel();
  questionArray: QuestionModel[] = [];
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    let stringQuestions = localStorage.getItem('Questions');
    if (stringQuestions && stringQuestions != '') {
      this.questionArray = JSON.parse(stringQuestions);
      this.questionArray.forEach((element: QuestionModel) => {
        element.optionArray.forEach((el: any) => {
          el.checked = false;
        })
      });
    }
  }
  // getAllQuestion() {
  //   this.questionService.getQuestion().subscribe(res => {
  //     console.log(res.questions);
  //     this.questionList = res.questions;
  //   })
  // }

  // getResult(){
  //   this.router.navigate(['/result']);
  // }
  onRadioChange(quesIndex: number, optionIndex: number) {
    console.log('quesIndex', quesIndex);
    console.log('quesIndex', optionIndex);
    console.log('this.questionArray', this.questionArray[quesIndex]);
    console.log('this.optionArray', this.questionArray[quesIndex].optionArray[optionIndex]);
    for (let i = 0; i < this.questionArray[quesIndex].optionArray.length; i++) {
      if (i == optionIndex) {
        this.questionArray[quesIndex].optionArray[i].checked = true;
      } else {
        this.questionArray[quesIndex].optionArray[i].checked = false;
      }
    }
    console.log('this.optionArray', this.questionArray[quesIndex].optionArray[optionIndex]);
    // this.questionArray[quesIndex].optionArray[optionIndex].checked = true;
    // this.questionObj.optionArray.forEach((el: any) => {
    //   el.checked = false;
    // });
    // this.questionObj.optionArray[optionIndex].checked = true;
  }

  finalSubmit() {
    console.log(this.questionArray);
  }
}
