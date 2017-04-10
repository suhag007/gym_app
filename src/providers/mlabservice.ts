import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class Mlabservice {

  constructor(public http: Http) {
    console.log('Hello Mlabservice Provider');
  }
   
  apibaseUrl: string = 'https://api.mlab.com/api/1/databases/gym_app/collections/customerdetails?apiKey=yourapikey';

  registeruser(body: any): Observable <any> {
  	 let bodyString = JSON.stringify(body); // Stringify payload
     let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
     let options = new RequestOptions({ headers: headers }); // Create a request option
  	 // console.log(this.bodyString);

     return this.http.post(this.apibaseUrl, body, options) // ...using post request
                .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

}
