import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  courses=[
    {id:1, name:'Angular'},
    {id:2, name:'Dot Net'},
    {id:3, name:'C#'}
  ];
  
}
  