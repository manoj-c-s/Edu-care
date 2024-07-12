import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }


  public getQuestionsOfQuiz(qid:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${baseUrl}/question/quiz/all/${qid}`,{headers});
  }

  public getQuestionsOfQuizForUser(qid:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${baseUrl}/question/quiz/${qid}`,{headers});
  }

  public addQuestion(question:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${baseUrl}/question/`,question,{headers});
  }

  public deleteQuestion(qid:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${baseUrl}/question/${qid}`,{headers});
  }

  public evalQuiz(questions:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${baseUrl}/question/eval-quiz`,questions,{headers});
  }
}
