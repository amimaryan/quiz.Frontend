import { Component } from '@angular/core'
import { ApiService } from './api.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast'

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})

export class QuestionsComponent {

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