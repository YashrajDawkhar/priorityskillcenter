import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {


  constructor(private backend: BackendService, private fb: FormBuilder) { }

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
      this.backend.saveContactInfo(this.contact.value).subscribe((d) => {
        this.contact.reset();
      })
    }

  }






}
