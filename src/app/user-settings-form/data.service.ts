import {Injectable} from '@angular/core';
import {UserSettings} from './user-settings';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class DataService{
  
  /*
  postUserSettingsForm(userSettings:UserSettings):Observable<UserSettings>{
    return of(userSettings);
  }
  */

  constructor(private http:HttpClient){}

  postUserSettingsForm(userSettings:UserSettings):Observable<any>{
    return this.http.post('https://putsreq.com/OjpeK95zj0836C8D0MJv', userSettings);
  }
  

}