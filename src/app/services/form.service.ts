import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSourseQuestions } from '../interfaces/Question';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private _http:HttpClient) { }

  public getForm(name:string): Observable<DataSourseQuestions[]>{
    return this._http.get<DataSourseQuestions[]>(`assets/forms/${name}.json`);
  }

 
}
