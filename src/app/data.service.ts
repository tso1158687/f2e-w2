import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97';
  constructor(
    private http: HttpClient
  ) { }
  getData (): Observable<any> {
    const data = this.http.get(this.url);
    console.log(data);
    return data;
  }
}
