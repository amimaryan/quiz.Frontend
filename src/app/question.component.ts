import { Component } from '@angular/core'
import { ApiService } from './api.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast'

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})

export class QuestionComponent {

    question = {};
    
    constructor(private api: ApiService){}

    post(question) {
        this.api.postQuestion(question)
    }
}