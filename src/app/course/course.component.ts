import { Component, Input, OnInit, computed, effect, signal } from '@angular/core';
import { BackendService } from '../backend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input('type') set updateType(value: string) {
    this.type.set(value)
  }

  type = signal<string>('');
  courses = signal<Array<any>>([])


  constructor(private backend: BackendService, private activated: ActivatedRoute) { }

  ngOnInit(): void { }



  call_If_Type_Change = effect(() => {
    this.backend.getCourseList(this.type()).subscribe((data: any) => {
      this.courses.update(q => data.courses);
    })
  })


}
