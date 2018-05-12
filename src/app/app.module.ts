import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { AppRoutingModule } from './/app-routing.module';

import { FilterPipe } from './filter.pipe';

import { QuestionService } from './question.service';
import { HttpClientModule } from '@angular/common/http';

import {CheckboxModule} from 'primeng/checkbox';
import {PickListModule} from 'primeng/picklist';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuizComponent,
    FilterPipe
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CheckboxModule,
    HttpClientModule,
    PickListModule,
    ButtonModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
