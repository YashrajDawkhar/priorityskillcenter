import { Component, Input, effect, signal } from '@angular/core';
import { BackendService } from '../backend.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  dialog_display = false

  @Input('type') set fromURL_Type(value: string) {
    this.type.set(value)
  }

  @Input('index') set fromURL_Index(value: number) {
    this.index.set(value)
  }

  type = signal<string>('');
  index = signal<number>(0);
  detail: any = signal({})

  constructor(private backend: BackendService, private fb: FormBuilder) { }

  getImage(img: any): any {
    if (img) {
      return img
    }
  }

  get_detail = effect(() => {

    this.backend.getDetail(this.type(), this.index()).subscribe((data: any) => {
      this.detail.update(() => data)
    })

  })


  contact: FormGroup = this.fb.group({
    Name: ['', Validators.required],
    Email: ['', Validators.required],
    Subject: ['', Validators.required],
    Message: ['']
  })

  save() {

    Object.keys(this.contact.controls).forEach(key => {
      this.contact.controls[key].markAsDirty();
    });

    if(this.contact.valid){
  
      this.backend.saveContactInfo(this.contact.value).subscribe((d)=>{
        this.contact.reset();
        this.dialog_display = false
      })

    }


  }

}
