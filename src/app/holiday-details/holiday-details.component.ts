import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-holiday-details',
  templateUrl: './holiday-details.component.html',
  styleUrls: ['./holiday-details.component.css']
})
export class HolidayDetailsComponent implements OnInit {

private _holidayDetail : any = [];

  constructor(public sharedService : SharedService , private router: Router) {
  	 
   };

  ngOnInit() {

  	 this._holidayDetail = this.sharedService.holidayDetail;

  	 
  };

  goBack(){
  this.router.navigate(['/holiday-list']);
  };

};
