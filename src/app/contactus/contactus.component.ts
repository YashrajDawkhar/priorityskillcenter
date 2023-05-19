import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {


  constructor(private backend:BackendService,private fb:FormBuilder){}

  contact = this.fb.group({
    Name:[''],
    Email:[''],
    Subject:[''],
    Message:['']
  })

  save(){
  

    this.backend.saveContactInfo(this.contact.value).subscribe((d)=>{
      console.log(d);
      
    })


  }






}
