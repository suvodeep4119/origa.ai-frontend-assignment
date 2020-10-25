import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FrontendData } from './models/frontendData.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FrontendDataService implements OnInit {
  serviceLocalData: FrontendData[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.fetchData();
  }

  onFetchData() {
    return this.fetchData();
  }

  private fetchData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      map((responseData: FrontendData) => {
        const dataArray: FrontendData[] = [];
        for (const key in responseData) {
          dataArray.push(responseData[key]);
        }
        return dataArray;
      })
    );
    // .subscribe((data: any) => {
    //   // console.log(data);
    //   this.serviceLocalData = data;
    //   console.log(this.serviceLocalData);
    // });
  }
}
