import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html'
})

export class QuizComponent {

    question = {};
    questions
    
    constructor(private api: ApiService){}

    ngOnInit() {
        this.api.getQuestions().subscribe(res => {
            this.questions = res
        })
    }

    post(question) {
        this.api.postQuestion(question)
    }
}