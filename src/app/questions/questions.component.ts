import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

import { QuestionService } from '../question.service';




@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  sourceQuestions: Question[];
  selectedValues: Question[] = [];



  constructor(private questionService: QuestionService) {
    console.log(this.selectedValues);
  }

  ngOnInit() {
    // this.questionService.getQuestions().then(questions => this.sourceQuestions = questions);
    this.sourceQuestions = this.questionService.getQuestions();



  }

  searchById(t) {
    console.log(t);

  }
}
