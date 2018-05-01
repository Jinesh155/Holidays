import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BaseService {

  constructor(protected http: Http) { }

  
    public getData(url: string) : Observable<any> {
      return this.http.get(url)
        .map(this.handleSuccess)
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                        
    }

    protected handleSuccess(res: Response) {
        return res.json() || {};
    };

};
