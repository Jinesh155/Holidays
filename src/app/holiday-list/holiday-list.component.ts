import { Component, OnInit } from '@angular/core';
import { HolidaysService } from '../../services/holidays.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AsyncPipe } from '@angular/common';
import { KeyPipe } from '../objectKeyPipe';
import 'rxjs/add/operator/map';

import { SharedService } from '../../services/shared.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css'],
})


export class HolidayListComponent implements OnInit {
  private _holidayListTemp : any =[];
  private key  = '';
  private _holidayList : any = [];
  private keys : any = [];
  private subscribe: Subscription;

  private url = 'https://holidayapi.com/v1/holidays?key=06df65df-afa4-4770-8e50-f5d2a5f29a26&country=US&year=2015';

  constructor(private holidaysService: HolidaysService , private router: Router , private sharedService : SharedService)  {

  }

  ngOnInit() {
      this.holidaysService.getData(this.url)
      .subscribe(resp => {this._holidayListTemp = resp.holidays;
         this.keys = Object.keys(this._holidayListTemp);
         for (let i=0 ; i< this.keys.length ; i++){
         		if(this._holidayListTemp[this.keys[i]].length >1){
         			for( let j=0 ; j<this._holidayListTemp[this.keys[i]].length ; j++ )
         				this._holidayList.push(this._holidayListTemp[this.keys[i]][j]);
         		}else{
         		this._holidayList.push(this._holidayListTemp[this.keys[i]][0]);
         		}
         }
      })
  };

  displayList(data) {
    this.sharedService.holidayDetail = data;
    this.router.navigate(['/holiday-details']);
  }
}
