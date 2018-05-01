import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { HolidayDetailsComponent } from './holiday-details/holiday-details.component';
import { KeyPipe } from './objectKeyPipe';


import { HolidaysService } from '../services/holidays.service';
import { BaseService } from '../services/base.service';
import { SharedService } from '../services/shared.service';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@NgModule({
  declarations: [
    AppComponent,
    HolidayListComponent,
    HolidayDetailsComponent,
    KeyPipe,
  ],
  imports: [ BrowserModule, FormsModule, HttpModule , AppRoutingModule, CommonModule ],
  providers: [HolidaysService, BaseService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
