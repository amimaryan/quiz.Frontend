import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {}

    postQuestion(question){
        this.http.post('https://localhost:44398/api/Questions', question).subscribe(res => {
            console.log(res);
        })
    }
}