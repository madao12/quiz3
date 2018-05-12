import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { QUESTIONS } from '../question-list';
import { Question } from '../question';
import { SELECTED } from '../selected-list';
import {NgForm} from '@angular/forms';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  selectedQuestions: Question[];



  numToLetter(k: number) {
    return String.fromCharCode(65 + k);
  }




  constructor(private questionService: QuestionService) {


   }

  ngOnInit() {
    this.selectedQuestions = this.questionService.getSelectedQuestions();

  }

}
