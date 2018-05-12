import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { SelectedQuestionsComponent } from './selected-questions/selected-questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { AppRoutingModule } from './/app-routing.module';

import { FilterPipe } from './filter.pipe';

import { QuestionService } from './question.service';
import { HttpClientModule } from '@angular/common/http';

import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    SelectedQuestionsComponent,
    QuizComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CheckboxModule,
    HttpClientModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
