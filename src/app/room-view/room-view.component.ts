import { Component, OnInit } from '@angular/core';

import { rooms } from '../rooms';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements OnInit {
  rooms = rooms;
  constructor() { }

  ngOnInit() {
  }

}