import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../service/questions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  questionList: any = [];
  constructor(private questionService: QuestionsService,
    private router: Router ) { }

  ngOnInit(): void {
    this.getAllQuestion();
  }
  getAllQuestion() {
    this.questionService.getQuestion().subscribe(res => {
      console.log(res.questions);
      this.questionList = res.questions;
    })
  }

  getResult(){
    this.router.navigate(['/result']);
  }
  
}
