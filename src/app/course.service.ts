import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor() { }

  getCourses(){
    return [
      {id:1, name:'From service Angular'},
      {id:2, name:'Dot Net'},
      {id:3, name:'C#'}
    ];
  }

}