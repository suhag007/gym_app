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
   
  apibaseUrl: string = 'https://api.mlab.com/api/1/databases/gym_app/collections/customerdetails?apiKey=apikey';

  registeruser(body: any): Observable <any> {
  	 // let bodyString = JSON.stringify(body); // Stringify payload
     let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
     let options = new RequestOptions({ headers: headers }); // Create a request option
  	 // console.log(this.bodyString);

     return this.http.post(this.apibaseUrl, body, options) // ...using post request
                .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
   getuserlist(): Observable <any> {
     let getlisturl: string='https://api.mlab.com/api/1/databases/gym_app/collections/customerdetails?f={"_id": 1, "Name": 1,"Phone_no":1}&apiKey=apikey';
     let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
     let options = new RequestOptions({ headers: headers }); // Create a request option
  	 // console.log(this.bodyString);

     return this.http.get(getlisturl, options)
                .map((res:Response) => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }

   getsingleuser(id:string): Observable <any>{
   	 console.log("id we got in service" + id);
   	let getsingleuser: string='https://api.mlab.com/api/1/databases/gym_app/collections/customerdetails?q={"_id": { "$oid": '+id+'} }&fo=true&apiKey=apikey';
   	console.log(getsingleuser);
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
     let options = new RequestOptions({ headers: headers }); // Create a request option
  	 // console.log(this.bodyString);

     return this.http.get(getsingleuser, options)
                .map((res:Response) => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }
}
