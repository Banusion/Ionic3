import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ENV } from '../config/env';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class API {

  api: any;
  api2: any;

  constructor(public http: Http) {
    console.log('Hello API Provider');
  }

  load( Res ) {
   console.log('params API :' + Res)
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept', 'application/json');
      headers.append('Authorization', ENV.API_TOKEN);
      this.http.get('/v1/' + Res,{headers: headers})
        .map(res => res.json())
        .subscribe(api => {
          console.log(api)
          if (api.data === undefined) {
            this.api = api;
          } else {
            this.api = api.data;
          }
          resolve(this.api);
        });
    });
  }
}
