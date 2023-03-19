import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  data: any = []

  constructor(private backend: BackendService, private activated: ActivatedRoute) {
    activated.queryParams.subscribe((query: any) => {

      console.log(query);
      

      backend.getCourse().subscribe((d: any) => {
        this.data = d[query.type][query.id]

        console.log(this.data);
        

      })
    })
  }

}
