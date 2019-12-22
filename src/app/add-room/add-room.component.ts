import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  uploadForm;

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.uploadForm = this.formBuilder.group({
      name: ''
    });
  }

  onSubmit(roomData){
    console.warn('ok');
  }

  ngOnInit() {
  }

}