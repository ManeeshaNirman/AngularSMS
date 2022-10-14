import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentService } from './student.service';
//import students from './data/students.json' ;
import { Student } from './students.model';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'sm-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit,OnDestroy {

  title:string='Student Managment System ';
  students!:Student[];
  filterStudents!:Student[];
  showIcon:boolean=false;
  messege:string='';
  subscriber!:Subscription;
  private _talentFilter: string = ''

  set talentFilter(value:string){
    
    this._talentFilter=value;
    this.filterByTalent()
  }

  get talentFilter():string{
    return this._talentFilter;

  }

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.subscriber=this.studentService.getStudents().subscribe({
      next:val=>{this.filterStudents=val;
      this.students=this.filterStudents;
      }
    })
  }

ngOnDestroy():void{
  this.subscriber.unsubscribe;
}

  togleIcon(){

    this.showIcon=!this.showIcon;

  }

  filterByTalent(){

this.filterStudents= this.students.filter(student=>student.studentStatus.includes(this.talentFilter))

  }

  onMessegeRecieved(value:string){

    this.messege=value;

  }

}
