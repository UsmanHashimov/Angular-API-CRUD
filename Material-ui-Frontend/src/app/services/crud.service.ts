import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gym } from '../models/gym';
import { Observable } from 'rxjs';
import { Creategym } from '../models/creategym';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  baseUrl : string = 'https://localhost:7026/api/Gym/';

  constructor(private http : HttpClient) { }

  getAll() : Observable<Gym[]> {
    return this.http.get<Gym[]>(this.baseUrl + 'GetAllGyms')
  }
  
  create(data: Creategym): Observable<Creategym> {
    return this.http.post<Creategym>(this.baseUrl + 'CreateGym', data)
  }

  getbyid(id: number): Observable<Gym> {
    return this.http.get<Gym>(`${this.baseUrl}GetGymByID`, { params: { id: id } });
  }  

  update(id: number, data: Creategym): Observable<Creategym> {
    return this.http.put<Creategym>(this.baseUrl + `UpdateGym?id=${id}`, data)
  }

  delete(id: number): Observable<Gym> {
    return this.http.delete<Gym>(this.baseUrl + `DeleteGym?id=${id}`)
  }
}
