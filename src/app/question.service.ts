import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Question } from './question';
import { QUESTIONS } from './question-list';
import { SELECTED } from './selected-list';


@Injectable()
export class QuestionService {
  questions = QUESTIONS;
  selected = SELECTED;
  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.questions;
}

  getSelected() {
    return this.selected;


  }

}
