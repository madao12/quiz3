import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';

import { QuizComponent } from './quiz/quiz.component';
import {Question} from './question';

const routes: Routes = [
  {path: '', component: QuestionsComponent },
  {path: 'quiz', component: QuizComponent, data: {} }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
