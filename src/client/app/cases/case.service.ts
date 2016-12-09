import { Injectable } from '@angular/core';

import { Case } from './case';
import { CASES } from './mock-cases';

@Injectable()
export class CaseService {
  getCases(): Promise<Case[]> {
    return Promise.resolve(CASES);
  }
}


// import { Injectable }     from '@angular/core';
// import { Http, Response } from '@angular/http';
//
// import { Case } from './case';
// import { Observable } from 'rxjs/Observable';
//
// @Injectable()
// export class CaseService {
//   private casesUrl = 'http://www.mocky.io/v2/584869ab100000d20c4e2f87';  //URL to given JSON file
//
//   constructor (private http: Http) {}
//
//   getCases (): Observable<Case[]> {
//     return this.http.get(this.casesUrl).map(this.extractData).catch(this.handleError);
//   }
//
//   private extractData(res: Response) {
//     let body = res.json();
//     return body.data || {};
//   }
//
//   private handleError (error: Response | any) {
//     let errMsg: string;
//     if (error instanceof Response) {
//       const body = error.json() || '';
//       const err = body.error || JSON.stringify(body);
//       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
//     } else {
//       errMsg = error.message ? error.message : error.toString();
//     }
//     console.error(errMsg);
//     return Observable.throw(errMsg);
//   }
// }
