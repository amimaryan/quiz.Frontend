import { Component } from '@angular/core'
import { ApiService } from './api.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast'

@Component({
    selector: 'quiz-list',
    templateUrl: './quiz-list.component.html'
})

export class QuizListComponent {

    quiz = {};
    quizzes
    
    constructor(private api: ApiService){}

    ngOnInit() {
        this.api.getQuizzes().subscribe(res => {
            this.quizzes = res
        })
    }
}