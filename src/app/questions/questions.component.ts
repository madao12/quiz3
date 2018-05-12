import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

import { QuestionService } from '../question.service';




@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  sourceQuestions: Question[] = [];
  selectedQuestions: Question[] = [];



  constructor(private questionService: QuestionService) {
    this.sourceQuestions = this.questionService.getQuestions();
  }

  ngOnInit() {
    // this.questionService.getQuestions().then(questions => this.sourceQuestions = questions);
    this.sourceQuestions = this.questionService.getQuestions();
  }

  setSelectedQuestions() {
    this.questionService.setSelectedQuestions(this.selectedQuestions);
  }
}
