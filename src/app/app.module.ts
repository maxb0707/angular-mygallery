import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RoomViewComponent } from './room-view/room-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomListComponent } from './room-list/room-list.component';
import { AddRoomComponent } from './add-room/add-room.component';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'upload', component: AddRoomComponent},
  {path: '**', component: DashboardComponent} //wildcard path, always last
]

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } //for debugging
    ) ],
  declarations: [ AppComponent, TopBarComponent, RoomViewComponent, DashboardComponent, RoomListComponent, AddRoomComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
