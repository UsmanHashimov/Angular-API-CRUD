import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { createUserModel } from '../models/createUser';
import { UserViewModel } from '../models/user-view-model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl : string = 'https://localhost:7026/api/Gym/';

  constructor(private http : HttpClient) { }

  getAll() : Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'GetAllGyms')
  }
  
  create(data: createUserModel): Observable<createUserModel> {
    return this.http.post<createUserModel>(this.baseUrl + 'CreateGym', data)
  }

  getbyid(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}GetGymByID`, { params: { id: id } });
  }  

  update(id: number, data: createUserModel): Observable<createUserModel> {
    return this.http.put<createUserModel>(this.baseUrl + `UpdateGym?id=${id}`, data)
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>(this.baseUrl + `DeleteGym?id=${id}`)
  }
}
