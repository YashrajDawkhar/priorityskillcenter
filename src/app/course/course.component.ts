import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {


  data: any = []
  type:string =''


  constructor(private backend: BackendService, private activated: ActivatedRoute) {
    activated.queryParams.subscribe((query: any) => {
      backend.getCourse().subscribe((d: any) => {
        this.data = d[query.type]
        this.type = query.type
      })
    })
  }


  getImage(img:any){
    return `https://docs.google.com/uc?id=${img}`
  }


}
