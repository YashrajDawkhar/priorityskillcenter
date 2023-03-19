import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  API = "http://localhost:3000"

  constructor(private http:HttpClient) { }

  getCourse(){
    return this.http.get(`${this.API}/courses`)
  }




}
