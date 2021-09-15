import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageInfo } from 'src/app/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Authentication} from 'src/app/models/user'; 
import {map } from 'rxjs/operators';
import { Users } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

    api_url = environment.api_url;

    private dataEdit = new BehaviorSubject<Users>(null);
    botaoEdit = this.dataEdit.asObservable();
    username = localStorage.getItem('username');
    password = localStorage.getItem('password');

constructor(private http: HttpClient) { 
    console.log('socorrodeus');
  }
  getUsersList(usuarios: Users){
    this.dataEdit.next(usuarios);
  }

  authentication(authentication: Authentication) {
    const headers =  new HttpHeaders({ Authorization: 'Basic ' + btoa(authentication.username + ':' + authentication.password)});
    return this.http.get(this.api_url + 'user/login', {headers}).pipe(
      map(
        authData => {
          let storageInformation: StorageInfo = {
            admin: authData[0],
            token: authData[1]
          }
          console.log(storageInformation);
          return storageInformation;
        }
      )
    );
  }

  getUsers(){
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    return this.http.get<Users[]>(this.api_url + 'user', {headers}).pipe(
      map(
        userData => {
          if (userData){
            return userData;
          }else{
            return [];
          }
        }
      )
    );
  }

  createUsers(user: Users){
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    return this.http.post<Users>(this.api_url + 'user', user, {headers}).pipe(
      map(
        userData => {
          if (userData){
            return userData;
          }else{
            return [];
          }
        }
      )
    );
  }

  deleteUsers(id: number){
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    return this.http.delete(this.api_url + 'user/' + id, {headers, responseType: 'text' as 'text'}).pipe(
      map(
        userData => {
          return userData;
        }
      )
    );
  }

  updateUsers(user: Users){
    const id = user.id;
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    return this.http.put<Users>(this.api_url + 'user/' + id, user, {headers}).pipe(
      map(
        userData => {
          if (userData){
            return userData;
          }else{
            return [];
          }
        }
      )
    );
  }
}
