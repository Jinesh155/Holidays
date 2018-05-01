import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolidayListComponent } from "./holiday-list/holiday-list.component";
import { HolidayDetailsComponent } from "./holiday-details/holiday-details.component";

const routes: Routes = [
  {
    path: 'holiday-list',
    component: HolidayListComponent,
  },
  {
    path: 'holiday-details', 
    component: HolidayDetailsComponent 
  },
  {
    path: '',
    redirectTo: '/holiday-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
