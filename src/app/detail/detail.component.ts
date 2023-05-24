import { Component, Input, effect, signal } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  @Input('type') set fromURL_Type(value: string) {
    this.type.set(value)
  }

  @Input('index') set fromURL_Index(value: number) {
    this.index.set(value)
  }

  type = signal<string>('');
  index = signal<number>(0);
  detail:any = signal({})

  constructor(private backend: BackendService) { }

  getImage(img: any): any {
    if (img) {
      return img
    }
  }

  get_detail = effect(()=>{

    this.backend.getDetail(this.type(),this.index()).subscribe((data:any)=>{

      console.log(data);

      this.detail.update(()=> data)
      

    })

  })

}
