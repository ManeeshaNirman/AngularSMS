import { Component, Input,EventEmitter, Output ,OnInit } from '@angular/core';

@Component({
  selector: 'sm-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {


color:string='';
@Input() attendence: number=0;
@Input() firstName: string='';
@Output() attendenceClick:EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  if(this.attendence<0 || this.attendence>100){
    this.attendence=0;
  }

 else if(this.attendence<35){
    this.color='red';
  }
 else if(this.attendence<55){
    this.color='yellow';
  }

  else if(this.attendence<65){
    this.color='green';
  }

 else{
    this.color='gold';
  }

  }

  onClick(){
    this.attendenceClick.emit(`${this.firstName}'s Attendence is ${this.attendence} % `);
  }

}
