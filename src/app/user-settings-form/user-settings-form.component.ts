import {Component, OnInit} from '@angular/core';
import {IUserSettings} from './data/user-settings';

@Component({
  selector:'user-settings-form',
  templateUrl:'./user-settings-form.component.html'
})

export class UserSettingsFormComponent 
    implements OnInit{

 constructor(){}

userSettings:IUserSettings={
  name:'Milton'
}

  ngOnInit() {

  }

}