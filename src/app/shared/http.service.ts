import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http";
import { Student } from "../students/students.model";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class HttpService{

    private studentsUrl:string='http://localhost:3000/students'

    constructor(private http: HttpClient){

    }

getAllStudents():Observable<Student[]>{

 return this.http.get<Student[]>(this.studentsUrl);
 

}

}