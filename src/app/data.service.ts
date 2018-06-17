import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any;
  list: any;
  private url = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97';
  constructor(
    private http: HttpClient
  ) { }
  getData (): Observable<any> {
    this.data = this.http.get(this.url);
    console.log(this.data);
    return this.data;
  }
  // getActivity(id: number): Observable<any> {
  //   console.log(id);
  //   console.log(this.data);
  //   this.getData()
  //     .subscribe(p => {
  //       // console.log(p);
  //       p.result.records.forEach(e => {
  //         if (e.Ticketinfo.length === 0) {
  //           e.Ticketinfo = '未提供';
  //         }
  //       });
  //       this.list = p.result.records;
  //       console.log(this.list);
  //       return of(this.list.find(act => act._id === id));
  //     });
  // }
  // getHero(id: number): Observable<Hero> {
  //   return of(HEROES.find(hero => hero.id === id));
  // }
}
