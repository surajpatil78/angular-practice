import {Injectable} from '@angular/core';
import {UserSettings} from './user-settings';
import {Observable, of} from 'rxjs';
//import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class DataService{
  
  constructor(){}

  postUserSettingsForm(userSettings:UserSettings):Observable<UserSettings>{
    return of(userSettings);
  }
  
  /*constructor(private http:HttpClient){}

  postUserSettingsForm(userSettings:UserSettings):Observable<any>{
    return this.http.post('https://putsreq.com/Va1dGJHk0yo22Furd99h', userSettings);
  }
  */

}