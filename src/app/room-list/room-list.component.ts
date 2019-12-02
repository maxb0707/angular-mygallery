import { Component, OnInit } from '@angular/core';

import { rooms } from '../rooms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms = rooms
  constructor() { }

  ngOnInit() {
  }

}