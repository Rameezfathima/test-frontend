import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from './test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private baseURL="http://localhost:8080/api/k1/health";

  constructor(private httpClient:HttpClient) { }

  getTestsList(): Observable<Test[]>{
    return this.httpClient.get<Test[]>(`${this.baseURL}`);
  }
  //Create/add User
  createTest(test:Test):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, test);
  }
  getTestById(id:number):Observable<Test>{
    return this.httpClient.get<Test>(`${this.baseURL}/${id}`)
  }
  updateTest(id:number):Observable<Test>{
    return this.httpClient.put<Test>(`${this.baseURL}/${id}`, Test);
  }
}
