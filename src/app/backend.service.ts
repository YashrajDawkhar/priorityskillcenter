import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  // API = "http://localhost:4000"
  API = "https://prioritycenter.vercel.app" 

  constructor(private http:HttpClient) { }


  getCourseList(courseName:string){
    return this.http.get(`${this.API}/course/${courseName}`)
  }

  getDetail(courseName:string,index:number){
    return this.http.get(`${this.API}/course/${courseName}/${index}`)
  }

}




