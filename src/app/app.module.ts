import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RoomViewComponent } from './room-view/room-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
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
  declarations: [ AppComponent, TopBarComponent, RoomViewComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
