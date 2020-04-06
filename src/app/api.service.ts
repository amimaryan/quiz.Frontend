import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'

@Injectable()
export class ApiService {

    private selectedQuestion = new Subject<any>();
    private selectedQuiz = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();
    quizSelected = this.selectedQuiz.asObservable();

    constructor(private http: HttpClient) {}

    getQuestions(quizId){
            return this.http.get(`https://localhost:44398/api/Questions/${quizId}`);
        }

    getQuizzes(){
        return this.http.get('https://localhost:44398/api/Quizzes');
    }

    getAllQuizzes(){
        return this.http.get('https://localhost:44398/api/Quizzes/all');
    }

    postQuestion(question){
        this.http.post('https://localhost:44398/api/Questions', question).subscribe(res => {
            console.log(res);
        })
    }

    putQuestion(question) {
        this.http.put('https://localhost:44398/api/Questions/' + question.id, question).subscribe(res => {
            console.log(res);
        })
    }

    postQuiz(quiz){
        this.http.post('https://localhost:44398/api/Quizzes', quiz).subscribe(res => {
            console.log(res);
        })
    }

    putQuiz(quiz) {
        this.http.put('https://localhost:44398/api/Quizzes/' + quiz.id, quiz).subscribe(res => {
            console.log(res);
        })
    }


    selectQuestion(question) {
        this.selectedQuestion.next(question);
    }

    selectQuiz(quiz) {
        this.selectedQuiz.next(quiz);
    }
}