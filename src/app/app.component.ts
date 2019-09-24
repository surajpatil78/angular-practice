
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  isRed:boolean = true;
  
  isBlueBack:boolean = true;

  courses=[
    {id:1, name:'Angular'},
    {id:2, name:'Dot Net'},
    {id:3, name:'C#'}
  ];

  addCoarse(){ 
    this.courses.push({id:4, name:'JAVA'});
  }

  removeCourse(course){
    console.log(course);
    let indexCourse = this.courses.indexOf(course);
    this.courses.splice(indexCourse,1);
  } 

  sampleVar:number=100;
 
  
}
  