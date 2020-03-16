import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
         MatInputModule, 
         MatCardModule, 
         MatListModule, 
         MatToolbarModule 
        } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './api.service'
import { QuestionsComponent } from './questions.component';
import { RouterModule } from  '@angular/router';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';
import { QuizComponent } from './quiz.component'
import { QuizListComponent } from './quiz-list.component'
import { RegisterComponent } from './register.component'
import { AuthService } from './auth.service'

const routes = [
  {path: '', component: HomeComponent},
  {path: 'question', component: QuestionComponent},
  {path: 'question/:quizId', component: QuestionComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'quiz-list', component: QuizListComponent},
  {path: 'register', component: RegisterComponent}
  
]

@NgModule({
  declarations: [
    AppComponent, QuestionComponent, QuestionsComponent, HomeComponent, NavComponent, QuizComponent, QuizListComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
