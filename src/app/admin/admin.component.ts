import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { QuestionModel } from './question-model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  questionObj: QuestionModel = new QuestionModel();
  questionArray: QuestionModel[] = [];
  isEdit: boolean = false;
  selectedIndex: number = -1;


  constructor() {
    console.log(this.questionObj);

  }

  ngOnInit() {
    let stringQuestions = localStorage.getItem("Questions");
    if (stringQuestions && stringQuestions != '') {
      this.questionArray = JSON.parse(stringQuestions);
    }

  }

  addQuestion() {
    if (!this.questionObj.question || this.questionObj.question == "") {
      alert("Please Enter question field");
      return;
    }
    if (this.questionObj.optionArray) {
      let selectedRadio = false;
      let isEmptyField = false;
      for (let i = 0; i < this.questionObj.optionArray.length; i++) {
        if (this.questionObj.optionArray[i].text == '') {
          isEmptyField = true;
        }

        if (this.questionObj.optionArray[i].correct == true) {
          selectedRadio = true;
        }
      }
      if (isEmptyField || !selectedRadio) {
        alert("There is some error, pls check all fields first");
        return;
      } else {
        console.log("this is questionAraay", this.questionArray);

        this.questionArray.push(JSON.parse(JSON.stringify(this.questionObj)));
        console.log("this is questionObj", this.questionObj)
        localStorage.setItem('Questions', JSON.stringify(this.questionArray));
        this.questionObj = new QuestionModel();
      }
    }
    // if (
    //   this.questionObj.question != '' && this.questionObj.optionArray != '') 
  }

  updateQuestion() {
    this.questionArray[this.selectedIndex] = this.questionObj;
    localStorage.setItem('Questions', JSON.stringify(this.questionArray));
    this.isEdit = false;
    this.selectedIndex = -1;
    this.questionObj = new QuestionModel();
  }

  onRadioChange(i: any) {
    this.questionObj.optionArray.forEach((el: any) => {
      el.correct = false;
    });
    this.questionObj.optionArray[i].correct = true;
  }

  onEdit(i: number) {
    this.isEdit = true;
    this.selectedIndex = i;
    this.questionObj = JSON.parse(JSON.stringify(this.questionArray[i]));
  }

  delete(i: any) {
    console.log('questionArray.........', this.questionArray);
    this.questionArray.splice(i, 1);
    console.log('delete', this.questionArray);
    localStorage.setItem('Questions', JSON.stringify(this.questionArray));
  }

  deleteAll() {
    localStorage.removeItem('Questions');
  }

}
