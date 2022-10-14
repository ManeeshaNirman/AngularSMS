import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/http.service';
import { Student } from './students.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpService:HttpService) { }

  getStudents():Observable<Student[]>{
 return this.httpService.getAllStudents();

  }
}
