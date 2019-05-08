import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserSettings} from './data/user-settings';
import {DataService} from '../data/data.service';

@Component({
  selector:'user-settings-form',
  templateUrl:'./user-settings-form.component.html'
})

export class UserSettingsFormComponent 
    implements OnInit{

constructor(private dataSer:DataService){}

userSettings:UserSettings={
  name:'Milton'
}

  ngOnInit() {

  }
/*
  onSubmit(form:NgForm){
    console.log('in onSubmit : ' + form.valid);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result=>console.log('success : ' + result),
      error=>console.log('error : ' + error)
    );
  }
*/
}