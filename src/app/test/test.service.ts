import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestService {
  url = 'https://pxhkcny2sf.execute-api.us-east-1.amazonaws.com/prod/?limit=5&days=5';

  constructor(private http: Http) { }

  getData() {
    return this.http.get(this.url).map(this.extractData);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || { };
  }
}
